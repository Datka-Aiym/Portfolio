import React from 'react';
import gradient2 from '../../assets/gradient2.svg';
import horse1 from '../../assets/horse.jpg';  
import macarons from '../../assets/maca.jpg';  
import home from '../../assets/home.jpg';  
import uviler from '../../assets/ukra.jpg'; 
import doc from '../../assets/doc.jpg'; 
import seedra from '../../assets/seed.avif'; 
import { motion } from "framer-motion";

export default function Index() {
  const projects = [
    { img: horse1, link: "https://horse-project-nine.vercel.app/", title: "Лошади" },
    { img: macarons, link: "https://your-project-link2.com", title: "Макароны" },
    { img: home, link: "https://your-project-link3.com", title: "Домик" },
    { img: uviler, link: "https://your-project-link4.com", title: "Украшения" },
    { img: doc, link: "https://your-project-link5.com", title: "Документ" },
    { img: seedra, link: "https://your-project-link6.com", title: "Семена" },
  ];

  return (
    <div className="py-20 bg-[#11071F]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Заголовок */}
        <h1 className="text-5xl font-extrabold tracking-wide text-[#7127BA] text-left mb-10">
          Проекты
        </h1>

        {/* Фоновый градиент */}
        <img src={gradient2} alt="" className="absolute -z-10 opacity-50 w-full left-0 top-20" />

        {/* Карточки проектов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-[#6827aa] shadow-lg hover:scale-105 transition-transform"
            >
              <img src={project.img} alt={project.title} className="w-full h-[200px] object-cover" />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2 bg-[#7127BA] text-white text-lg font-semibold hover:bg-[#5a1e92] transition">
                  Live Demo
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
