"use client";

import { Project } from "@/types/project";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4 hover:scale-[1.02] hover:shadow-xl transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mt-1">
        {project.description}
      </p>
    </div>
  );
}
