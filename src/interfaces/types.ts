export interface UserProfile {
  name: string;
  avatar: string;
  hasOnboarded: boolean;
}

export interface UserStore {
  userProfile: UserProfile;
  projects: Project[];
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  setProfile: (name: string, avatar: string) => void;
  addProject: (project: Project) => void;
  removeProject: (id: string) => void;
  updateProject: (project: Project) => void;
}

export interface Task {
  id: string;
  projectId: string;
  text: string;
  isCompleted: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  projectCategories?: string[];
  description: string;
  progress: number;
  dueDate: string;
}
