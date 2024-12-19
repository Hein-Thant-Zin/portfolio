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
    description: "Local Potato Chips Brand",
    link: "https://shwenadi.vercel.app",
    target: "_blank",
    rel: "noopener noreferrer",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/task-manager.png",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-gray-100"
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
      >
        <HoverEffect 
          items={projects} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" 
        />
      </motion.div>
    </section>
  );
}
