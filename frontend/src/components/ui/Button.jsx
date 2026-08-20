function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const base =
    "px-5 py-3 rounded-xl font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;