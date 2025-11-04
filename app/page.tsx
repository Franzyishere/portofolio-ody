"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mt-32"
    >
      <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-zinc-200 dark:ring-zinc-800">
        <Image src="/profile.jpg" alt="Foto Profil" fill className="object-cover" />
      </div>
      <h1 className="text-4xl font-bold mt-6">Ody Frans Wijaya</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mt-2">
        Web Developer | D3 Teknologi Informasi
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <a
          href="/projects"
          className="rounded-full bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition"
        >
          Lihat Proyek Saya
        </a>
      </motion.div>
    </motion.div>
  );
}
