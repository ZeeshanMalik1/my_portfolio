import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="pt-12 pb-16 bg-transparent transition-colors duration-500"
    >
        <img src="../images/aboutil.png" alt="" className="w-100 absolute right-0" />
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-36 h-36 mx-auto lg:mx-0 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
        >
          <img
            src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/503602046_122212331852162023_1195050744545413_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGwVj4QdMRcvOBJrqCJfJ07WOAghxMsXb5Y4CCHEyxdvmPnVIptsnt-B3pCW5Zi6_mqBtlmRmgNUfbUKykBBvw9&_nc_ohc=NDkbE-2YeegQ7kNvwHPeWoN&_nc_oc=AdkE3dSE1tE-kw1CDd_YgLyuM_6zeTax31NhLOGDIx-RIAQ1VcBnkWvh15Z-WSEN1VtOZ1nL7uqRW1HmtP_6Z5_u&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=LqfJz15BACA4f5NR7By8Kw&oh=00_Afcn67sfBgHt_FdDNCDskNF0vrlWDphXe3KAgo-79_r2-w&oe=68EAAC58"
            alt=""
            className="w-36 h-36 rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl text-justify leading-relaxed">
            I am a passionate Web Developer who loves turning ideas into
            production-ready products. I enjoy working on performance-critical
            web apps and delightful UI. My interests include frontend
            development, UX, and UI design.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Location
              </div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                Street No#1, Milad Chownk, Mokam-e-Hayat, Sargodha, Punjab,
                Pakistan
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Availability
              </div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                Open to work
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Email
              </div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                mzeshanmalik130@gmail.com
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                LinkedIn
              </div>
              <div className="font-medium flex items-center text-gray-800 dark:text-gray-200">
                <img src="../images/linkedin.png" alt="" className="w-5 invert"  />
                <a
                  href="https://www.linkedin.com/in/zeeshan-malik-2b4b98210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-indigo-600 dark:hover:text-teal-400 transition"
                >
                  linkedin.com/in/zeeshan-malik-2b4b98210/
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
