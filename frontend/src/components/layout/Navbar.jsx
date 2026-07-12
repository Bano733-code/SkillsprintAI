import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Skill Gap", path: "/skill-gap" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Projects", path: "/projects" },
    { name: "Interview", path: "/interview" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="SkillSprint AI"
            className="h-10 w-10 rounded-lg"
          />

          <span className="text-2xl font-bold text-blue-600">
            SkillSprint AI
          </span>

        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Desktop Button */}

        <button className="hidden rounded-xl bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 lg:block">
            Get Started
        </button>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col gap-5 px-6 py-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button className="mt-4 rounded-xl bg-blue-600 py-3 text-white">
              Get Started
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;