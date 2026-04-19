export const ProgressBar = ({ progress }: { progress: number }) => {
  let color = "bg-red-300";
  if (progress >= 80) color = "bg-green-400";
  else if (progress >= 40) color = "bg-yellow-300";

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-sm font-semibold text-slate-700">İlerleme</span>
        <span className={`text-sm font-bold`}>{progress}%</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
