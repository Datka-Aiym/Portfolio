// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#11071F] text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Текст "Contact" сверху */}
        <h1 className="text-5xl font-bold text-white mb-6 ml-[-980px]">Contact</h1>
								<h3 className='ml-[-540px] font-serif'>Привет! Я —Datkaiym, веб-разработчик с опытом работы в создании  <br />интерфейсов с использованием React и Tailwind CSS. <br />
У меня есть опыт работы с инструментами, такими как JavaScript, React а также я <br />активно использую Tailwind CSS для быстрой и гибкой стилизации. <br />
Моя цель — создавать приложения, которые будут приносить пользу и приносить  <br />удовольствие пользователям. Я стремлюсь развиваться в области  <br />фронтенд-разработки и всегда готов изучать новые технологии и фреймворки. <br />
Хочу работать в команде, где смогу улучшать свои навыки и участвовать в <br />создании крупных веб-приложений
</h3>
        
        {/* Иконки в два ряда */}
        <div className="flex flex-col items-center space-y-8 mt-[-260px]">
          {/* Верхний ряд с LinkedIn и GitHub */}
          <div className="flex space-x-12 ml-[864px]">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded-xl p-6 hover:bg-blue-400 transition duration-300 text-6xl flex items-center justify-center "
            > 
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Datka-Aiym"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-black rounded-xl p-6 hover:bg-gray-200 transition duration-300 text-6xl flex items-center justify-center"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          
          {/* Нижний ряд с WhatsApp и Email */}
          <div className="flex space-x-12 ml-[860px]">
            <a
              href="https://wa.me/996505787909"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-white rounded-xl p-6 hover:bg-green-300 transition duration-300 text-6xl flex items-center justify-center"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="bg-yellow-400 text-white rounded-xl p-6 hover:bg-yellow-300 transition duration-300 text-6xl flex items-center justify-center"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Текст внизу */}
      <div className="text-center mt-6">
        <p className="text-lg text-gray-400 mt-[90px]">
          &copy; 2025 Datka. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
