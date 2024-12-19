"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SkillCardProps {
  name: string;
  icon: string;
  description: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-32 h-32 rounded-xl cursor-pointer perspective hover:shadow-xl"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className={cn(
          "w-full h-full rounded-xl shadow-md flex items-center justify-center bg-white/10 backdrop-blur-sm",
          "transition-all duration-500 transform-style preserve-3d"
        )}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full flex items-center justify-center backface-hidden">
          <Image 
            src={icon} 
            alt={name} 
            width={48} 
            height={48}
            className="object-contain hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <div
          className={cn(
            "absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4",
            "flex items-center justify-center text-center backface-hidden"
          )}
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-sm font-medium leading-tight">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};