import React from "react";
import Stat from "./Stat";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="pt-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6">
        <div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="typeWritter"
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-100"
          >
            Hi, I’m{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-nunito">Zeeshan</span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">
              <Typewriter
                words={[
                  "a Product-Minded Developer",
                  "a React Enthusiast",
                  "a Frontend Engineer",
                  "a UI/UX Perfectionist",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          >
            I design and build performant web applications with delightful user experiences. I focus on React, modern
            frontend patterns, and clean UI.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:shadow-md hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-sm"
          >
            <Stat title="Experience" value="2 months" />
            <Stat title="Projects" value="20+" />
            <Stat title="Focus" value="Frontend" />
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-first lg:order-last"
        >
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-teal-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/481079209_122194972550162023_7527564945490349303_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=-RG2dY5M9AoQ7kNvwHpCDjA&_nc_oc=AdlPJ0Csv_Y99XcA_FUmRvJODSokfBlaMqTbF6kZsTRQE0I_VHX9idE59E5JOg_UmCpNcrYEvR8dIsWWTgz50e09&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=C9UUzNAYmw4A5wVWSCbw9w&oh=00_AffEkhiXyM1IV-PkYNJYhUqnsuqbL2CWnjHLak1aIinTZg&oe=68EB0192"
                alt="Zeeshan"
                className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
