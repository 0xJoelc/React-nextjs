import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center items-center px-4"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-400 max-w-3xl text-center">
          I'm a [your profession] with [X years] of experience in building web
          applications. I specialize in [your skills, e.g., React, Next.js,
          TailwindCSS]. In my free time, I love [hobbies].
        </p>
      </motion.section>
    </div>
  );
}
