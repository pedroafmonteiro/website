const TextArea = ({
  label,
  id,
  name,
  placeholder,
  required,
}: {
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full text-white py-1.5">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className={[
            "bg-neutral-900 border-2 border-neutral-800 shadow-sm shadow-neutral-800",
            "p-1.5 rounded-lg",
            "focus:outline-none focus:border-white/50",
            "w-full min-h-[150px] resize-none",
            "transition-all duration-150",
          ].join(" ")}
        />
      </div>
    </>
  );
};

export default TextArea;
