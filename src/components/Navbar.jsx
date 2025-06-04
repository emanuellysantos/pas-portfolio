import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass = (path) =>
    `block px-4 py-2 rounded-xl transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          PAS - Portfólio
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden sm:flex gap-4">
          <Link to="/projetos" className={navItemClass("/projetos")}>
            Projetos
          </Link>
          <Link to="/videos" className={navItemClass("/videos")}>
            Vídeos
          </Link>
          <Link to="/apresentacoes" className={navItemClass("/apresentacoes")}>
            Apresentações
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col px-4 pb-4">
          <Link
            to="/projetos"
            className={navItemClass("/projetos")}
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            to="/videos"
            className={navItemClass("/videos")}
            onClick={() => setMenuOpen(false)}
          >
            Vídeos
          </Link>
          <Link
            to="/apresentacoes"
            className={navItemClass("/apresentacoes")}
            onClick={() => setMenuOpen(false)}
          >
            Apresentações
          </Link>
        </div>
      )}
    </nav>
  );
}
