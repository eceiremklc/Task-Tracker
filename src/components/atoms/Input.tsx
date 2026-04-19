interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const Input = ({ label, className, ...props }: InputProps) => (
  <div className="w-full">
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all outline-none bg-white border-slate-200 ${className}`}
    />
  </div>
);
