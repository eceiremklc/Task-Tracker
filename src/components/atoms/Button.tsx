interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  isLoading,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`w-full py-3.5 px-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg 
  ${variant === "primary" ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-200" : "bg-slate-50 text-slate-800"} 
  ${props.disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
  >
    {isLoading ? "Setting up..." : children}
  </button>
);
