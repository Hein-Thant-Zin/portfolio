"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TimeStamp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees =
    ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hoursDegrees =
    (((time.getHours() % 12) + time.getMinutes() / 60) / 12) * 360;

  return (
    <motion.div
      className={cn(
        "hidden md:flex fixed md:bottom-4 md:top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-50",
        "w-24 h-24 md:w-32 md:h-32",
        "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
        "rounded-full shadow-xl",
        "items-center justify-center",
        "transition-all duration-300",
        "hover:scale-105"
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full px-2">
        <div className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
          {time.toLocaleTimeString()}
        </div>
        <div className="text-xs md:text-sm  text-gray-600 dark:text-gray-400">
          {time.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
          })}
        </div>
      </div>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Clock face */}
        <circle
          className="fill-white/90 dark:fill-gray-800/90 stroke-gray-300 dark:stroke-gray-600"
          cx="50"
          cy="50"
          r="48"
          strokeWidth="2"
        />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            className="stroke-gray-500 dark:stroke-gray-400"
            x1="50"
            y1="10"
            x2="50"
            y2={i % 3 === 0 ? "18" : "15"}
            strokeWidth={i % 3 === 0 ? "3" : "2"}
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}

        {/* Hour hand */}
        <motion.line
          className="stroke-gray-800 dark:stroke-white"
          x1="50"
          y1="50"
          x2="50"
          y2="28"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: hoursDegrees }}
          transition={{ duration: 0.5 }}
          style={{ originX: "50px", originY: "50px" }}
        />

        {/* Minute hand */}
        <motion.line
          className="stroke-gray-600 dark:stroke-gray-300"
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: minutesDegrees }}
          transition={{ duration: 0.5 }}
          style={{ originX: "50px", originY: "50px" }}
        />

        {/* Second hand */}
        <motion.line
          className="stroke-red-500"
          x1="50"
          y1="50"
          x2="50"
          y2="16"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ rotate: secondsDegrees }}
          transition={{ duration: 0.5, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
        />

        {/* Center dot */}
        <circle className="fill-red-500" cx="50" cy="50" r="2.5" />
      </svg>
    </motion.div>
  );
};
