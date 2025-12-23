import { CheckCircle2Icon, CircleXIcon, Loader2Icon } from "lucide-react";

const Button = ({
  type,
  baseText,
  loadingText,
  successText,
  errorText,
  isLoading,
  isSuccess,
  isError,
}: {
  type: "button" | "submit" | "reset";
  baseText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}) => {
  const baseClass =
    "py-2 px-4 rounded-lg transition-all duration-200 w-full my-1.5 select-none";
  let buttonClass = `bg-neutral-200 hover:bg-neutral-300 text-neutral-900 cursor-pointer ${baseClass}`;

  if (isSuccess) {
    buttonClass = `bg-green-600 text-green-100 cursor-default ${baseClass}`;
  } else if (isError) {
    buttonClass = `bg-red-600 text-red-100 cursor-default ${baseClass}`;
  } else if (isLoading) {
    buttonClass = `bg-yellow-600 text-yellow-100 cursor-not-allowed ${baseClass}`;
  }

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={isLoading || isSuccess || isError}
    >
      {isSuccess ? (
        <span className="flex items-center justify-center gap-2">
          <CheckCircle2Icon />
          <span>{successText}</span>
        </span>
      ) : isError ? (
        <span className="flex items-center justify-center gap-2">
          <CircleXIcon />
          <span>{errorText}</span>
        </span>
      ) : isLoading ? (
        <>
        <div className="flex items-center justify-center gap-2">
          <Loader2Icon className="animate-spin" />
          <span>{loadingText}</span>
        </div>
        </>
      ) : (
        <span>{baseText}</span>
      )}
    </button>
  );
};

export default Button;
