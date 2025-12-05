"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description:
      "Sistem absensi karyawan menggunakan Face Recognition, Flask, MySQL, Algoritma LBPH, dan Haarcascade Classifier.",
    image: "/projects/face-recognition.jpg",
    tech: ["OpenCV", "Flask", "Python", "MySQL"],
    link: "#",
  },
  {
    title: "Game Top-Up Store",
    description:
      "Website top-up game (Mobile Legends, Free Fire, Valorant) menggunakan Laravel 10 dan React.",
    image: "/projects/topup-store.jpg",
    tech: ["Laravel", "React", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Mobile Legends Tournament Dashboard",
    description:
      "Dashboard real-time untuk event MLBB UNS PSDKU, termasuk sistem tracking transaksi dan peserta.",
    image: "/projects/ml-dashboard.jpg",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mt-24 px-4"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.03,
              y: -8,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0 20px 60px -10px rgba(0,0,0,0.25)",
            }}
            className="relative border dark:border-zinc-800 rounded-3xl overflow-hidden 
              bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl 
              shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* GLOW EFFECT */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-br from-blue-500/30 to-purple-600/20"></div>

            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Cinematic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-80 transition duration-500"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                className="relative inline-block w-full text-center py-2 rounded-xl overflow-hidden
                bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium shadow-md"
              >
                <span className="relative z-10">Lihat Project →</span>
                <span className="absolute inset-0 bg-blue-700 dark:bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}