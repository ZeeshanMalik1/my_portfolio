import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const tech = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const soft = ["Communication", "Problem Solving", "Leadership", "Mentoring"];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const GlassCard = ({ title, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl border border-white/30 dark:border-gray-700/50 bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg shadow-lg transition-colors duration-500"
    >
      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h4>
      {children}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="pt-12 pb-16 transition-colors duration-500 bg-transparent"
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center underline font-bold  mb-8"
      >
        Skills
      </motion.h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard title="Technical Skills">
          <div className="mt-3 space-y-4">
            {tech.map((t) => (
              <div key={t.name}>
                <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <span>{t.name}</span>
                  <span>{t.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: animate ? `${t.level}%` : 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="Soft Skills">
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {soft.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {s}
              </motion.li>
            ))}
          </ul>
          <img src="../images/skillsil.png" alt=""  className="w-100 absolute bottom-8 right-2 "/>
        </GlassCard>
      </div>
    </section>
  );
}

export default Skills;
