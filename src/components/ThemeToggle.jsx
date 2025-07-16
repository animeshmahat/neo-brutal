import { useContext } from "react"; // Import React hook to access context
import { ThemeContext } from "../contexts/ThemeContext"; // Import the context we created
import Button from "./ui/Button"; // Use the reusable Button component

// This component displays a button to toggle between light and dark modes
export default function ThemeToggle() {
  // Use useContext to get the current theme and toggle function from context
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} variant="outline">
      {/* Show different icons/text depending on current theme */}
      {dark ? "☀ Light" : "🌙 Dark"}
    </Button>
  );
}
