type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
    secondary:
      "border border-gray-700 text-white hover:bg-gray-800 hover:scale-105",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}