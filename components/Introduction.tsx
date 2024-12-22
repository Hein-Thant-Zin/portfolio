"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ProfilePhoto } from "./ProfilePhoto";
import { motion } from "framer-motion";

const words = `Hi, I'm Hein Thant Zin. I'm a passionate web developer with expertise in modern technologies like React, Next.js, and Node.js.`;

export function Introduction() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center p-4"
    >

        <ProfilePhoto />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center max-w-2xl"
      >
        <TextGenerateEffect
          words={words}
          className=" rounded-lg p-4   text-sm sm:text-base md:text-lg"
        />
      </motion.div>
    </motion.div>
  );
}
