import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen p-4 space-y-6">
      <header className="flex justify-between items-center">
        <nav className="space-x-4 font-bold text-lg underline-offset-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <ThemeToggle />
      </header>

      <main>{children}</main>

      <footer className="text-center border-t pt-4 mt-8 text-sm opacity-70">
        © 2025 BrutalApp. All rights reserved.
      </footer>
    </div>
  );
}
