import type { Project } from "../../interfaces/types";

const categoryColors: Record<string, string> = {
  "Web Development":
    "bg-blue-50 text-blue-700 border-blue-200",
  Design:
    "bg-pink-50 text-pink-700 border-pink-200",
  "Mobile Development":
    "bg-yellow-50 text-yellow-700 border-yellow-200",
  AI: "bg-green-50 text-green-700 border-green-200",
  "Data Science":
    "bg-purple-50 text-purple-700 border-purple-200",
  Finance:
    "bg-orange-50 text-orange-700 border-orange-200",
  Other:
    "bg-slate-50 text-slate-700 border-slate-200",
};

export const CategoryBadge = ({
  category,
}: {
  category: Project["category"];
}) => (
  <span
    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${categoryColors[category] || "bg-slate-100 text-slate-700 border-slate-300"}`}
  >
    {category}
  </span>
);
