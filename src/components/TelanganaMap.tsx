import { useState } from "react";
import { telanganaDistricts, District } from "@/data/telanganaDistricts";
import { DistrictTooltip } from "./DistrictTooltip";
import { motion } from "framer-motion";

export const TelanganaMap = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (district: District, event: React.MouseEvent) => {
    setHoveredDistrict(district);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredDistrict) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
  };

  const getDistrictColor = (colorIndex: number) => {
    const colors = [
      "hsl(var(--district-1))",
      "hsl(var(--district-2))",
      "hsl(var(--district-3))",
      "hsl(var(--district-4))",
      "hsl(var(--district-5))",
      "hsl(var(--district-6))",
      "hsl(var(--district-7))",
      "hsl(var(--district-8))",
      "hsl(var(--district-9))",
      "hsl(var(--district-10))",
      "hsl(var(--district-11))",
    ];
    return colors[colorIndex - 1] || colors[0];
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Map background */}
          <rect
            x="0"
            y="0"
            width="800"
            height="500"
            fill="hsl(var(--map-bg))"
            rx="12"
          />

          {/* Districts */}
          {telanganaDistricts.map((district) => (
            <motion.path
              key={district.id}
              d={district.path}
              fill={getDistrictColor(district.colorIndex)}
              stroke="hsl(var(--map-border))"
              strokeWidth="2"
              className="map-district"
              onMouseEnter={(e) => handleMouseEnter(district, e)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                filter: hoveredDistrict?.id === district.id 
                  ? "drop-shadow(0 0 20px hsl(var(--map-hover-glow) / 0.6))" 
                  : "drop-shadow(0 2px 8px hsla(0, 0%, 0%, 0.1))",
              }}
            />
          ))}

          {/* District labels */}
          {telanganaDistricts.map((district) => {
            // Calculate center of district path for label placement
            const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathElement.setAttribute("d", district.path);
            const bbox = pathElement.getBBox?.() || { x: 0, y: 0, width: 0, height: 0 };
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            return (
              <text
                key={`label-${district.id}`}
                x={centerX}
                y={centerY}
                textAnchor="middle"
                className="text-[8px] font-semibold fill-white pointer-events-none"
                style={{
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  opacity: hoveredDistrict?.id === district.id ? 0 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {district.name.length > 15 ? district.name.substring(0, 12) + "..." : district.name}
              </text>
            );
          })}
        </svg>
      </motion.div>

      <DistrictTooltip district={hoveredDistrict} position={mousePosition} />
    </div>
  );
};
