const Button = ({
  type,
  isLoading,
  isSuccess,
  isError,
}: {
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}) => {
  let baseClass =
    "py-2 px-4 rounded-lg transition-all transition-colors duration-200 w-full my-1.5";
  let buttonClass = `bg-white text-neutral-900 cursor-pointer ${baseClass}`;

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
      {isSuccess
        ? "Sent"
        : isError
          ? "Error"
          : isLoading
            ? "Sending..."
            : "Send"}
    </button>
  );
};

export default Button;
