import { Checkbox } from "../atoms/Checkbox";
import { type Task } from "../../interfaces/types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => (
  <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl hover:border-teal-200 transition-colors group">
    <Checkbox checked={task.isCompleted} onChange={() => onToggle(task.id)} />
    <span
      className={`flex-1 text-sm ${task.isCompleted ? "text-slate-400 line-through" : "text-slate-700 font-medium"}`}
    >
      {task.text}
    </span>
    <button
      onClick={() => onDelete(task.id)}
      className="opacity-0 group-hover:opacity-100 p-1 text-slate-300 hover:text-red-500 transition-all"
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
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
);
