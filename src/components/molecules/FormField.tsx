import { FormLabel } from "../atoms/FormLabel";

interface FormFieldProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  isTextArea?: boolean;
}

export const FormField = ({ label, isTextArea, ...props }: FormFieldProps) => (
  <div className="w-full">
    <FormLabel>{label}</FormLabel>
    {isTextArea ? (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className="w-full px-4 py-2.5 rounded-custom border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all min-h-[100px] resize-none"
      />
    ) : (
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-custom border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all"
      />
    )}
  </div>
);
