import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A web app built with Next.js and TailwindCSS.",
    image: "/images/project1.jpg",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A full-stack application with Node.js and MongoDB.",
    image: "/images/project2.jpg",
    link: "https://example.com",
  },
];

export default  function Projects() {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
