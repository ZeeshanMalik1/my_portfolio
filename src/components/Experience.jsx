import { motion } from "framer-motion";

function Experience() {
  const items = [
    {
      role: "Frontend",
      company: "Switch2itech",
      years: "2021 - Present",
      desc: "Built scalable UI components and improved load times by 30%.",
    },
    {
      role: "Fullstack Intern",
      company: "Switch2itech",
      years: "Present",
      desc: "Worked across backend and frontend to ship features.",
    },
  ];

  return (
    <section
      id="experience"
      className="pt-8 pb-12 transition duration-300 text-gray-900 dark:text-gray-100"
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center underline mb-8"
      >
        Experience
      </motion.h3>
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="font-semibold text-lg">{it.role}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {it.company}
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {it.years}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              {it.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
