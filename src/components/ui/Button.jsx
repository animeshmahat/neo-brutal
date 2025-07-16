import { cn } from "../../utils/cn"; // Utility to merge classNames

// Button component with support for variants and additional props
export default function Button({
  children, // Content inside the button
  variant = "default", // Style variant (default, accent, outline)
  className = "", // Extra Tailwind classes if needed
  ...props // Remaining props like onClick, type, etc.
}) {
  return (
    <button
      className={cn(
        "btn", // Base button styles from Tailwind layer
        variant === "accent" &&
          "bg-[var(--accent)] text-white hover:brightness-110",
        variant === "outline" && "bg-transparent hover:bg-[var(--accent)]",
        className // Allow further customization if passed
      )}
      {...props} // Spread any additional props like onClick
    >
      {children}
    </button>
  );
}
