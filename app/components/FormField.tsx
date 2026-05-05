interface FormFieldProps {
  label: string;
  value: string | number | undefined;
  onChange: (val: string) => void;
  type?: "text" | "number" | "textarea";
  placeholder?: string;
}

export default function FormField({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder 
}: FormFieldProps) {

  const labelStyles = "block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4";
  const baseStyles = "w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400";

  return (
    <div>
      <label className={labelStyles}>
        {label}
      </label>
      
      {type === "textarea" ? (
        <textarea
          className={baseStyles}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input
          type={type}
          className={baseStyles}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
