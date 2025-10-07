import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md transition duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} <span id="footerName">Zeeshan</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            href="https://www.linkedin.com/in/zeeshan-malik-352534384/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_8px_#0e76a8] invert"
          >
            <img
              src="../images/linkedin.png"
              alt="LinkedIn"
              className="w-6 opacity-80 hover:opacity-100 transition"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            href="https://github.com/ZeeshanMalik1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_8px_#fff] invert"
          >
            <img
              src="../images/social.png"
              alt="GitHub"
              className="w-6 opacity-80 hover:opacity-100 transition"
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
