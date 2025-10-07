import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="pt-8 pb-20 text-gray-900 dark:text-gray-100 transition duration-300"
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center underline"
      >
        Contact
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl flex flex-col md:flex-row gap-8 transform transition duration-300 hover:scale-[1.02]"
      >
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">Get in touch</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m currently available for freelance and full-time opportunities.
            Send a message and I’ll reply within a few days.
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>{" "}
              <span className="font-medium">mzeeshanmalik130@gmail.com</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Phone:</span>{" "}
              <span className="font-medium">+92 3090236185</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Location:</span>{" "}
              <span className="font-medium">Sargodha, Pakistan</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8 ">
            <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            href="https://www.instagram.com/xeeshansiddique57/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_10px_#ee68d0]"
          >
            <img
              src="../images/instagram.png"
              alt="Instagram"
              className="w-5 opacity-80 hover:opacity-100 transition invert"
            />
          </motion.a>
            
            <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            href="https://www.facebook.com/xeeshansiddique57"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_10px_#009ee4]"
          >
            <img
              src="../images/facebook.png"
              alt="Facebook"
              className="w-5 opacity-80 hover:opacity-100 transition invert"
            />
          </motion.a>
            
            <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            href="https://x.com/shanimalik01435"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_10px_#fff]"
          >
            <img
              src="../images/x.png"
              alt="X"
              className="w-5 opacity-80 hover:opacity-100 transition invert"
            />
          </motion.a>
            
          </div>
        </div>

        {/* RIGHT SIDE (MAP) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 rounded-xl overflow-hidden border border-white/20 shadow-lg"
        >
          <iframe
            title="Sargodha Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.4945544512095!2d72.65815018954667!3d32.09746305935616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392176ff3f2e1795%3A0x20ce07089f16a3a9!2sMaqam%20E%20Hayat%2C%20Sargodha%2C%20Pakistan!5e0!3m2!1sen!2s!4v1759832890194!5m2!1sen!2s"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
