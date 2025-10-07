import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Harvard School's System",
      desc: "Harvard School Sargodha is a private English-medium institution offering quality education from primary to secondary levels. It focuses on academic excellence, discipline, and character building in a modern learning environment.",
      tags: ["React"],
      link: "https://harvardschool.edu.pk",
    },
    {
      title: "S.M.C",
      desc: "Sargodha Medical College is a public sector institution established in 2006, offering MBBS and postgraduate medical training. It is affiliated with the University of Sargodha and provides modern facilities and clinical exposure through its teaching hospital.",
      tags: ["React"],
      link: "https://smcsgd.edu.pk",
    },
    {
      title: "S.I.H.S",
      desc: "Sargodha Institute of Health Sciences offers professional programs in allied health fields like DPT, MLT, and Radiology. It emphasizes practical training and modern healthcare education to prepare skilled health professionals.",
      tags: ["React"],
      link: "https://shis.edu.pk",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-8 pb-12 transition duration-300 text-gray-900 dark:text-gray-100"
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center underline font-bold  mb-8"
      >
        Selected Projects
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transform transition duration-300"
          >
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50/40 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
