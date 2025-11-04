"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto mt-24 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Tertarik bekerja sama atau ingin tahu lebih banyak tentang saya?
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:oddyfrans@gmail.com"
          className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
