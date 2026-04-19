import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type UserStore, type Project } from "../interfaces/types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userProfile: {
        name: "",
        avatar: "",
        hasOnboarded: false,
      },
      projects: [],
      tasks: [],

      addTask: (task) =>
        set((state) => {
          const newTasks = [...state.tasks, task];
          const projectTasks = newTasks.filter(
            (t) => t.projectId === task.projectId,
          );
          const completed = projectTasks.filter((t) => t.isCompleted).length;
          const progress =
            projectTasks.length > 0
              ? Math.round((completed / projectTasks.length) * 100)
              : 0;
          return {
            tasks: newTasks,
            projects: state.projects.map((p) =>
              p.id === task.projectId ? { ...p, progress } : p,
            ),
          };
        }),
      toggleTask: (taskId: string) =>
        set((state) => {
          const newTasks = state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, isCompleted: !task.isCompleted }
              : task,
          );
          const toggledTask = state.tasks.find((t) => t.id === taskId);
          if (!toggledTask) return { tasks: newTasks };
          const projectTasks = newTasks.filter(
            (t) => t.projectId === toggledTask.projectId,
          );
          const completed = projectTasks.filter((t) => t.isCompleted).length;
          const progress =
            projectTasks.length > 0
              ? Math.round((completed / projectTasks.length) * 100)
              : 0;
          return {
            tasks: newTasks,
            projects: state.projects.map((p) =>
              p.id === toggledTask.projectId ? { ...p, progress } : p,
            ),
          };
        }),
      deleteTask: (taskId: string) =>
        set((state) => {
          const taskToDelete = state.tasks.find((t) => t.id === taskId);
          const newTasks = state.tasks.filter((task) => task.id !== taskId);
          if (!taskToDelete) return { tasks: newTasks };
          const projectTasks = newTasks.filter(
            (t) => t.projectId === taskToDelete.projectId,
          );
          const completed = projectTasks.filter((t) => t.isCompleted).length;
          const progress =
            projectTasks.length > 0
              ? Math.round((completed / projectTasks.length) * 100)
              : 0;
          return {
            tasks: newTasks,
            projects: state.projects.map((p) =>
              p.id === taskToDelete.projectId ? { ...p, progress } : p,
            ),
          };
        }),
      setProfile: (name: string, avatar: string) =>
        set(() => ({
          userProfile: {
            name,
            avatar,
            hasOnboarded: true,
          },
        })),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),

      updateProject: (updated: Project) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === updated.id ? { ...p, ...updated } : p,
          ),
        })),

      removeProject: (id: string) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "task-tracker-storage",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);
