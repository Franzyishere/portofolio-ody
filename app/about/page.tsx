"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types/project";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Rozers Store",
      description: "Website top-up game built with Laravel, React, and Midtrans.",
      image: "/projects/rozers.png",
      tech: ["Laravel", "React", "MySQL", "Midtrans"],
      demo: "",
      repo: "",
    },
    {
      title: "Face Recognition System",
      description: "Employee attendance system using Flask + OpenCV for face recognition",
      image: "/projects/face-recognition.png",
      tech: ["Flask", "Python", "MySQL"],
      demo: "",
      repo: "",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, i) => (
          <ProjectCard
            key={i}
            project={item}
            onClick={() => {
              setSelected(item);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <ProjectModal open={open} project={selected} onClose={() => setOpen(false)} />
    </div>
  );
}
