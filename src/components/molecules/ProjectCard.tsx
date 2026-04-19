import { type Project } from "../../interfaces/types";
import { CategoryBadge } from "../atoms/CategoryBadge";
import { ProgressBar } from "../atoms/ProgressBar";
import { useNavigate } from "react-router";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export const ProjectCard = ({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <article
      className="bg-white/90 p-6 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
      onClick={() => {
        navigate(`/project/${project.id}`);
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <CategoryBadge category={project.category} />
        <div className="flex gap-2">
          <button
            className="text-slate-400 hover:text-slate-600"
            title="Düzenle"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(project);
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4 1a1 1 0 01-1.213-1.213l1-4a4 4 0 01.828-1.414z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="text-red-400 hover:text-red-600"
            title="Sil"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(project.id);
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-2">
        {project.description}
      </p>

      <ProgressBar progress={project.progress} />

      <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs text-slate-400 font-medium italic">
          {project.dueDate}
        </span>
      </div>
    </article>
  );
};
