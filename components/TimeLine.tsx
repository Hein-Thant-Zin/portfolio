"use client";

import { useInView } from "@/app/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  emoji: string;
}

const events: TimelineEvent[] = [
  {
    year: 2001,
    title: "Born in Meikhtila",
    description:
      "Entered the world in the historic city of Meikhtila, Myanmar.",
    emoji: "👶",
  },
  {
    year: 2013,
    title: "First Computer",
    description: "Got first computer and started exploring the digital world.",
    emoji: "💻",
  },
  {
    year: 2016,
    title: "High School Graduation",
    description:
      "Graduated high school with honors, focusing on science and mathematics.",
    emoji: "🎓",
  },
  {
    year: 2017,
    title: "Started University",
    description:
      "Began studying Information Technology at Technological University Meikhtila in Myanmar.",
    emoji: "🏛️",
  },
  {
    year: 2019,
    title: "First Coding Bootcamp",
    description:
      "Covid started and learning web development in home, working on web development projects.",
    emoji: "👨‍💻",
  },
  {
    year: 2021,
    title: "Shit happened",
    description:
      "And you know the rest.",
    emoji: "💩",
  },
  {
    year: 2023,
    title: "Keep going",
    description:
      "Learning and growing as a IT guy, exploring new technologies.",
    emoji: "🚀",
  },
 
];

export const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My Journey 🚀
      </h2>
      <div className="relative" ref={ref}>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500" />

        {events.map((event, index) => (
          <motion.div
            key={event.year}
            className={`mb-8 flex justify-${
              index % 2 === 0 ? "start" : "end"
            } items-center w-full`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/2 pr-8 pl-4">
              {index % 2 === 0 && (
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{event.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {event.year}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {event.title}
                  </p>
                </motion.div>
              )}
            </div>
            <div className="w-1/2 pl-8 pr-4">
              {index % 2 !== 0 && (
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{event.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {event.year}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {event.title}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-lg w-full mx-4 shadow-2xl border border-gray-100 dark:border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{selectedEvent.emoji}</span>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {selectedEvent.year}
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  {selectedEvent.title}
                </h4>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedEvent.description}
            </p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Close ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
