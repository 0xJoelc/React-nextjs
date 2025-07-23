import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center items-center px-4"
      >
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </div>
  );
}
