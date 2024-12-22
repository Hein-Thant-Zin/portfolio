"use client";


import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </motion.button>
  );
};
