import { District } from "@/data/telanganaDistricts";
import { motion, AnimatePresence } from "framer-motion";

interface DistrictTooltipProps {
  district: District | null;
  position: { x: number; y: number };
}

export const DistrictTooltip = ({ district, position }: DistrictTooltipProps) => {
  return (
    <AnimatePresence>
      {district && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed pointer-events-none z-50"
          style={{
            left: position.x + 20,
            top: position.y - 10,
          }}
        >
          <div className="bg-card rounded-lg shadow-medium border border-border p-4 max-w-xs">
            <h3 className="text-lg font-bold text-foreground mb-2">{district.name}</h3>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-medium">Population:</span>
                <span className="text-foreground">{district.population}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-medium">Area:</span>
                <span className="text-foreground">{district.area}</span>
              </div>
              <div className="mt-3">
                <span className="text-muted-foreground font-medium block mb-1.5">Famous Landmarks:</span>
                <ul className="space-y-1">
                  {district.landmarks.map((landmark, index) => (
                    <li key={index} className="text-foreground text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
