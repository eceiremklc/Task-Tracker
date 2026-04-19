import { useUserStore } from "../store/useUserStore";
import { Navbar } from "../components/organisms/Navbar";
import { ProjectCard } from "../components/molecules/ProjectCard";
import { useState } from "react";
import { ProjectModal } from "../components/organisms/ProjectModal";
import type { Project } from "../interfaces/types";

const DashboardPage = () => {
  const { projects } = useUserStore();
  const { addProject, removeProject, updateProject } = useUserStore();
  const [modal, setModal] = useState(false);
  const [editProject, setEditProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Aktif Projeler
            </h1>
            <p className="text-slate-500 mt-1">
              Takımınızdaki ilerlemeyi ve görevleri yönetin.
            </p>
          </div>
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md flex items-center gap-2 w-fit"
            onClick={() => setModal(true)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4v16m8-8H4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Yeni Proje
          </button>
        </header>
        <ProjectModal
          isOpen={modal}
          onClose={() => {
            setModal(false);
            setEditProject(null);
          }}
          initialData={editProject}
          onSubmit={(project) => {
            if (editProject) {
              updateProject({ ...(project as Project), id: editProject.id });
            } else {
              addProject({
                ...(project as Project),
                id: project.id ?? `${Date.now()}`,
              });
            }
          }}
        />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects ? (
            projects?.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={(p) => {
                  setEditProject(p);
                  setModal(true);
                }}
                onDelete={removeProject}
              />
            ))
          ) : (
            <p className="text-center text-slate-500 col-span-full">
              Henüz proje bulunmamaktadır. Başlamak için "Yeni Proje" butonuna
              tıklayın!
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
