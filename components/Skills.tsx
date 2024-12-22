"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useInView } from "@/app/hooks/useInView";


const skills = [
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    description: "Building interactive UIs with reusable components",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs",
    description: "Creating fast, SEO-friendly React applications",
  },
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
    description: "Server-side JavaScript for scalable applications",
  },
  {
    name: "TypeScript",
    icon: "https://skillicons.dev/icons?i=ts",
    description: "Adding static typing to enhance JavaScript development",
  },
  {
    name: "Tailwind",
    icon: "https://skillicons.dev/icons?i=tailwind",
    description: "Rapidly building custom user interfaces",
  },
  {
    name: "GraphQL",
    icon: "https://skillicons.dev/icons?i=graphql",
    description: "Efficient data querying and manipulation",
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-full py-20"
    >
      <TextGenerateEffect
        words="My Skills"
        className="text-4xl font-bold text-centerrounded-xl mx-auto my-auto mb-12 text-gray-100"
      />
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </motion.div>
      <motion.span
        className="text-sm text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        (Click to flip)
      </motion.span>
    </div>
  );
}
