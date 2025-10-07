import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold overflow-hidden">
           <a href="#"><img
              src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/481079209_122194972550162023_7527564945490349303_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHtoKB368184vNmiKZO0wRvsd-snbEo_cex36ydsSj9x8ujaK-OuVIVaoOYw9Q4vJzLL4sv-5-QOIWlWewM1iM6&_nc_ohc=I94hTNMwVYkQ7kNvwEJNl1m&_nc_oc=AdmJgNZ8bHHpYfDVCNpzIXw2zhW6yLDDGj9IVwyns63xLu8MwzD6-uTufoZ2XO0EdvbnqdkykynxK2tC_nAG_Mla&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=MJIg_NV-8arUeSTx452xnQ&oh=00_Afdq1E33mfkMYQjlDXEXKOEOx044Pq_X_6B2NVD2GBh5dw&oe=68EAC952"
              alt="KZ"
              className="rounded-lg"
            /></a> 
          </div>
          <div>
            <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Zeeshan
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Web Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300"
        >
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>

        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-800 dark:text-gray-200 text-xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur px-6 py-4 flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
        >
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </header>
  );
}

export default Header;
