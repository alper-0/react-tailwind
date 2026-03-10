import { Link } from "react-router-dom";

// Add props interface
interface ButtonReturnToHomeProps {
  className?: string; // optional className
}

export default function ButtonReturnToHome({ className }: ButtonReturnToHomeProps) {
  return (
    <Link
      to="/"
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        text-sm font-bold
        text-black
        bg-orange-500
        rounded-md
        transition-all duration-200 ease-out
        transform
        hover:bg-orange-600
        hover:scale-105
        hover:-translate-y-1
        hover:shadow-[0_0_20px_rgba(255,145,0,0.7)]
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-orange-400
        focus:ring-offset-2
        ${className ?? ""}  /* Append additional classes */
      `}
    >
      Return to Home
    </Link>
  );
}