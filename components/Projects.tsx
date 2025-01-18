"use client";

import { useInView } from "@/app/hooks/useInView";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Kyat Link",
    description: "Online Money Exchanger for Myanmar",
    link: "https://kyat-link.vercel.app",
    target: "_blank",
    rel: "noopener noreferrer",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/kyat-link.png",
  },
  {
    title: "Copy Mate",
    description:
      "A simple tool to copy and paste text through different devices",
    link: "https://copymate.vercel.app",
    target: "_blank",
    rel: "noopener noreferrer",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/copy-mate.png",
  },
  {
    title: "Next Social Platform",
    description: "A next positive social media plaform",
    link: "https://nextdotsocial.vercel.app",
    target: "_blank",
    rel: "noopener noreferrer",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/portfolio.png",
  },
  {
    title: "Shwe Nadi",
    description: "Local Potato Chips Brand with E-commerce",
    link: "https://shwenadi.vercel.app",
    target: "_blank",
    rel: "noopener noreferrer",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/task-manager.png",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={ref}
      className="max-w-7xl mx-auto px-8 py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"
    >
      <motion.h2
        className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-teal-100 dark:from-rose-950/30 dark:to-teal-950/30 blur-3xl -z-10 rounded-3xl" />
        <HoverEffect
          items={projects}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 rounded-3xl backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
        />
      </motion.div>
    </section>
  );
}
