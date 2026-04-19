import { useParams, useNavigate } from "react-router";
import { useUserStore } from "../store/useUserStore";
import { TaskManager } from "../components/organisms/TaskManager";
import { Navbar } from "../components/organisms/Navbar";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = useUserStore((state) =>
    state.projects.find((p) => p.id === id),
  );

  if (!project) return <div>Yükleniyor...</div>;

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-3xl mx-auto p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Geri Dön
        </button>

        <div className="bg-white p-8 rounded-custom border border-slate-100 shadow-sm">
          <header className="mb-6">
            <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full uppercase tracking-widest">
              {project.category}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mt-3">
              {project.title}
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </header>

          <div className="flex items-center gap-6 py-4 border-y border-slate-50 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Bitiş: {project.dueDate}
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Durum: %{project.progress} Tamamlandı
            </div>
          </div>

          <TaskManager projectId={project.id} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
