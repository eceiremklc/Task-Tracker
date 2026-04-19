import { useMemo, useState } from "react";
import { useUserStore } from "../../store/useUserStore";
import { TaskItem } from "../molecules/TaskItem";

export const TaskManager = ({ projectId }: { projectId: string }) => {
  const [taskText, setTaskText] = useState("");
  const allTasks = useUserStore((state) => state.tasks);
  const tasks = useMemo(
    () => allTasks.filter((t) => t.projectId === projectId),
    [allTasks, projectId],
  );

  const { addTask, toggleTask, deleteTask } = useUserStore();

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      projectId,
      text: taskText,
      isCompleted: false,
    });
    setTaskText("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        Görevler{" "}
        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">
          {tasks.length}
        </span>
      </h2>

      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Yeni görev ekle..."
          className="flex-1 px-4 py-2 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-teal-600 outline-none transition-all text-sm"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition-colors"
        >
          Ekle
        </button>
      </form>

      <div className="space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="text-center py-8 text-slate-400 text-sm border-2 border-dashed border-slate-100 rounded-2xl">
            Henüz görev eklenmemiş.
          </p>
        )}
      </div>
    </div>
  );
};
