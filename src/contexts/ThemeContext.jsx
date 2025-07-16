import { createContext, useEffect, useState } from "react";

// Create a context object to provide theme data across the component tree
export const ThemeContext = createContext();

// This component wraps your app and allows any child to access the theme (light/dark) state
export function ThemeProvider({ children }) {
  // Create state to track whether dark mode is active or not
  const [dark, setDark] = useState(
    () =>
      // Detect user's system preference on initial load (dark mode or not)
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Select the root <html> element of the document
    const html = document.documentElement;

    // Add or remove the 'dark' class to enable Tailwind dark styling and custom CSS variables
    if (dark) {
      html.classList.add("dark"); // enables dark styles
    } else {
      html.classList.remove("dark"); // disables dark styles
    }

    // Apply smooth transition effect when switching theme
    html.style.transition = "background-color 0.5s ease, color 0.5s ease";
  }, [dark]); // Re-run this effect whenever 'dark' value changes

  // Toggle function to switch themes between dark and light
  const toggleTheme = () => setDark((prev) => !prev);

  // Provide the current theme and toggle function to the rest of the app
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
