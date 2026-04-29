import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-gray-200">
      
      <div className="w-full max-w-5xl flex items-center justify-between p-4">

        {/* Logo */}
        <div className="font-bold text-xl">
          EdTech
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <Link className="hover:text-purple-600" to="/">Home</Link>
          <Link className="hover:text-purple-600" to="/courses">Courses</Link>
          <Link className="hover:text-purple-600" to="/dashboard">Dashboard</Link>
        </div>

      </div>
    </nav>
  );
}