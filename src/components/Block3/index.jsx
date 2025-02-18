import React from 'react';
import gradient2 from '../../assets/gradient 2.svg';
import horse1 from '../../assets/horse.jpg';  
import macarons from '../../assets/maca.jpg';  
import home from '../../assets/home.jpg';  
import uviler from '../../assets/ukra.jpg'; 
import doc from '../../assets/doc.jpg'; 
import seedra from '../../assets/seed.avif'; 

export default function Index() {
  return (
    <div className="h-[830px] m-auto w-full bg-[#11071F]">

      <div className="w-[1160px] m-auto">

       <div id="projects" className="py-9 bg-[#110716]">
							<div className="text-5xl font-extrabold tracking-wide text-[#7127BA] text-left mt-[50px] absolute">Проекты</div>
							</div>

        <div className="ml-[300px]"><img src={gradient2} alt="" /></div>
        
        <div className="flex gap-[30px] mt-[-550px] absolute">
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={horse1} alt="Лошади" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link1.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={macarons} alt="Макароны" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link2.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={home} alt="Домик" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link3.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
        </div>

								
        
        <div className="flex gap-[30px] mt-[-260px] absolute">
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={uviler} alt="Увилер" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link4.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={doc} alt="Пусто" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link5.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
          <div className="rounded-lg w-[360px] h-[260px] bg-[#6827aa]">
            <img src={seedra} alt="Пусто" className="w-full h-[200px] object-cover rounded-t-lg" />
            <a href="https://your-project-link6.com" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-[#7127BA] text-white rounded-b-lg">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
