import { useState, useEffect, useRef } from "react";
import { telanganaDistricts, District } from "@/data/telanganaDistricts";
import { DistrictTooltip } from "./DistrictTooltip";
import { motion } from "framer-motion";
import telanganaMapPath from "@/assets/telangana-map.svg?url";

export const TelanganaMap = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [svgContent, setSvgContent] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load and parse the SVG
    fetch(telanganaMapPath)
      .then((response) => response.text())
      .then((svgText) => {
        setSvgContent(svgText);
      });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !svgContent) return;

    const svgElement = containerRef.current.querySelector("svg");
    if (!svgElement) return;

    // Find all path elements in the SVG and make them interactive
    const paths = svgElement.querySelectorAll("path, polygon, polyline");
    
    paths.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      
      // Get or generate a district ID based on position or index
      const districtIndex = index % telanganaDistricts.length;
      const district = telanganaDistricts[districtIndex];
      
      // Style the path
      pathElement.style.cursor = "pointer";
      pathElement.style.transition = "all 0.3s ease";
      
      const originalFill = pathElement.getAttribute("fill") || "#cccccc";
      
      // Add hover events
      pathElement.addEventListener("mouseenter", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        setHoveredDistrict(district);
        setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
        pathElement.style.fill = "hsl(var(--primary))";
        pathElement.style.opacity = "0.8";
        pathElement.style.filter = "drop-shadow(0 0 20px hsl(var(--primary) / 0.6))";
      });
      
      pathElement.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
      });
      
      pathElement.addEventListener("mouseleave", () => {
        setHoveredDistrict(null);
        pathElement.style.fill = originalFill;
        pathElement.style.opacity = "1";
        pathElement.style.filter = "none";
      });
    });

    // Cleanup
    return () => {
      paths.forEach((path) => {
        const pathElement = path as SVGPathElement;
        pathElement.replaceWith(pathElement.cloneNode(true));
      });
    };
  }, [svgContent]);


  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
        ref={containerRef}
      >
        {svgContent ? (
          <div
            className="w-full h-auto rounded-xl shadow-elegant overflow-hidden"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="w-full h-96 bg-muted rounded-xl animate-pulse flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        )}
      </motion.div>

      <DistrictTooltip district={hoveredDistrict} position={mousePosition} />
    </div>
  );
};
