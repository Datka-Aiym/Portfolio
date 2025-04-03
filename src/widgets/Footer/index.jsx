import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#11071F] text-white py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        
        {/* Заголовок */}
        <h1 className="text-5xl font-bold text-white mb-6">Contact</h1>

        {/* Описание */}
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
          Привет! Я — Datkaiym, веб-разработчик с опытом работы в создании 
          интерфейсов с использованием React и Tailwind CSS. Хочу работать в команде, 
          где смогу улучшать свои навыки и участвовать в создании крупных веб-приложений.
        </p>

        {/* Социальные сети */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-400 transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Datka-Aiym"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white rounded-full p-4 hover:bg-gray-600 transition duration-300 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/996505787909"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white rounded-full p-4 hover:bg-green-400 transition duration-300 text-3xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="bg-yellow-500 text-white rounded-full p-4 hover:bg-yellow-400 transition duration-300 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Копирайт */}
        <p className="text-sm text-gray-400 mt-8">
          &copy; 2025 Datka. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
