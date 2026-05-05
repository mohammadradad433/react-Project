import { NavLink } from "react-router-dom";
import DarkModeToggle from "./Components/ui/DarkModeToggle";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold"
      : "hover:text-purple-600";

  return (
    <nav className="w-full flex justify-center border-b border-gray-200">

      <div className="w-full max-w-5xl flex items-center justify-between p-4">

        {/* Logo */}
        <div className="font-bold text-xl">
          EdTech
        </div>

        {/* Links */}
        <div className="flex gap-8">

          

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/courses" className={linkStyle}>
            Courses
          </NavLink>

          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          
          <DarkModeToggle />

        </div>

      </div>
    </nav>
  );
}