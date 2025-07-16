import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./ui/Button";

// A toggle button to switch between light and dark modes
export default function ThemeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext); // Get theme state and toggle function

  return (
    <Button onClick={toggleTheme} variant="outline">
      {dark ? "☀ Light" : "🌙 Dark"}{" "}
      {/* Change label/icon based on current theme */}
    </Button>
  );
}
