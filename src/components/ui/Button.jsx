import { cn } from "../../utils/cn"; // Import a utility function to merge class names

// Reusable button component that can adapt styles and props
export default function Button({
  children, // Text or elements inside the button
  variant = "default", // Define visual style: default, accent, outline
  className = "", // Allow additional custom styling
  ...props // Collect and forward other props like onClick, type etc.
}) {
  return (
    <button
      // Merge and apply Tailwind styles depending on chosen variant
      className={cn(
        "btn", // Base button style defined in Tailwind layers
        variant === "accent" &&
          "bg-[var(--accent)] text-white hover:brightness-110", // Bright button
        variant === "outline" && "bg-transparent hover:bg-[var(--accent)]", // Transparent border style
        className // Add custom styles if any
      )}
      {...props} // Apply extra properties like onClick, type, etc.
    >
      {children} {/* Display button content (text or icon) */}
    </button>
  );
}
