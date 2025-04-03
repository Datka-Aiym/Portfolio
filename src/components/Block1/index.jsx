import React from 'react'
import fasw from '../../assets/fasew.png'
import arrow from '../../assets/Arrow.svg'

export default function HeroSection() {
  return (
    <div className=" relative w-full h-screen bg-[#11071F] flex items-center justify-center">
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11071F] to-[#11071F]"></div>

      <div className="relative flex flex-col lg:flex-row items-center lg:items-start w-[90%] max-w-[1260px] ml-[150px]">
        {/* Левая часть - изображение */}
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0">
          <img src={fasw} alt="Avatar" className="w-full h-full object-cover relative z-10" />
        </div>

        {/* Правая часть - текст */}
        <div className="text-white mt-6 lg:mt-0 lg:ml-10">
          <p className="text-lg">
          Привет, <span className="text-[#7127BA]">Я Кайыпова Даткайым.</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Я являюсь <br /> фронтенд-разработчиком.
          </h1>
          <p className="text-xl mt-4">Я владею такими навыками, как:</p>
        </div>

        {/* Стрелка */}
        <img src={arrow} alt="Arrow" className="absolute bottom-5 right-5 w-10 md:w-14" />
      </div>
    </div>
  )
}
