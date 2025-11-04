"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-24"
    >
      <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Halo! Saya Ody Frans, lulusan D3 Teknologi Informasi yang tertarik
        pada pengembangan web modern, AI, dan desain antarmuka yang elegan.
        Saya senang belajar teknologi baru dan mengubah ide menjadi produk nyata.
      </p>
    </motion.section>
  );
}
