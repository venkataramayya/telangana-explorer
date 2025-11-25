import { useState } from "react";
import { telanganaDistricts, District } from "@/data/telanganaDistricts";
import { DistrictTooltip } from "./DistrictTooltip";
import { motion } from "framer-motion";
import telanganaMapSvg from "@/assets/telangana-map.svg";

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
        className="w-full max-w-6xl relative"
        onMouseMove={handleMouseMove}
      >
        {/* Actual Telangana SVG Map */}
        <img 
          src={telanganaMapSvg} 
          alt="Telangana Map" 
          className="w-full h-auto rounded-xl shadow-elegant"
        />
        
        {/* Interactive overlay with invisible district regions */}
        <svg
          viewBox="0 0 1600 1600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ pointerEvents: 'none' }}
        >
          {/* Interactive districts - positioned to match the actual SVG */}
          {telanganaDistricts.map((district) => (
            <motion.path
              key={district.id}
              d={district.path}
              fill="transparent"
              stroke="transparent"
              strokeWidth="0"
              className="map-district"
              style={{ 
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => handleMouseEnter(district, e)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ 
                fill: "rgba(255, 255, 255, 0.15)",
                stroke: "hsl(var(--primary))",
                strokeWidth: 3
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          ))}
        </svg>
      </motion.div>

      <DistrictTooltip district={hoveredDistrict} position={mousePosition} />
    </div>
  );
};
