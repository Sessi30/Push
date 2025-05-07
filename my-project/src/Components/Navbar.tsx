import { BookMarked } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-300 w-full mt-10 rounded-b-lg shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <BookMarked className="mr-2" />
          Edu<span className="text-primary">Helper</span>
        </a>

        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="#accueil"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Accueil
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#inscription"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Inscription
            </a>
          </li>

          <li>
            <a
              href="#se connecter"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Se connecter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
