import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo(1).svg"; 

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-[#1A0B2E] shadow-lg">
      <div className="max-w-[1263px] mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Логотип */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-10 text-white text-lg font-medium">
          <a href="#dom" className="hover:text-gray-400">Дом</a>
          <a href="#skills" className="hover:text-gray-400">Навыки</a>
          <a href="#projects" className="hover:text-gray-400">Проекты</a>
        </nav>

        {/* Бургер-меню для мобильных */}
        <button className="md:hidden text-white text-3xl">☰</button>

      </div>
    </header>
  );
}
