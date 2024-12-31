export default function Button({ children, onClick, variant = "primary", disabled = false }) {
    const baseClass = "px-4 py-2 rounded text-white font-bold focus:outline-none";
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-gray-500 hover:bg-gray-600",
      disabled: "bg-gray-300 cursor-not-allowed",
    };
    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${variants[disabled ? "disabled" : variant]}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  