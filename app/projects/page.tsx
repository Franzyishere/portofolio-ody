"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Rozers Store",
      desc: "Website top-up game (MLBB, FF, Valorant) menggunakan Laravel & React.js.",
    },
    {
      title: "Face Recognition Attendance",
      desc: "Sistem absensi karyawan berbasis AI dengan Flask & Laravel.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-24"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Proyek Saya</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
