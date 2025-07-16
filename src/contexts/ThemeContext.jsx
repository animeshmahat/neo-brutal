import { createContext, useEffect, useState } from "react";

// Create a React Context to share theme state across components
export const ThemeContext = createContext();

// ThemeProvider wraps your app to provide theme state and toggling functionality
export function ThemeProvider({ children }) {
  // Initialize state based on system preference (dark/light)
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Apply or remove 'dark' class on the root html element
    // Tailwind and our CSS variables use this class to switch theme
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Add smooth transition effect between theme changes
    html.style.transition = "background-color 0.5s ease, color 0.5s ease";
  }, [dark]);

  // Toggle dark/light mode state
  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
