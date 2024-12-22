"use client";
import { useInView } from "@/app/hooks/useInView";
const skills = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "Tailwind", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "Next.js", percentage: 75 },
  { name: "Node.js", percentage: 70 },
    { name: "Laravel", percentage: 65 },
  { name: "MySQL", percentage: 60 },
];

const SkillProgress = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-between gap-6" ref={ref}>
        {skills.map((skill) => (
          <div key={skill.name} className="group w-[45%]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform origin-left transition-transform duration-1000 ease-out ${
                  inView ? "scale-x-100" : "scale-x-0"
                }`}
                style={{
                  width: `${skill.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillProgress;