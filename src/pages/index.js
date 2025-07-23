import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 9 }}
        transition={{ duration: 3 }}
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        <Image
          src="/./joeleth.jpeg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Joel.eth
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          A passionate developer building modern web applications with
          cutting-edge technologies.
        </p>
        <a
          href="/projects"
          className="mt-6 px-6 py-3 bg-black text-amber-50 rounded-lg hover:bg-gray-950/100 transition-colors"
        >
          View My Work
        </a>
      </motion.section>
    </div>
  );
}
