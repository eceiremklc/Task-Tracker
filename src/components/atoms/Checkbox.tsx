export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`w-5 h-5 rounded border flex items-center justify-center transition-all 
      ${checked ? "bg-teal-600 border-teal-600 text-white" : "border-slate-300 bg-white hover:border-teal-400"}`}
  >
    {checked && (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 13l4 4L19 7"
        />
      </svg>
    )}
  </button>
);
