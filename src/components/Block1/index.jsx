import React, { useState } from 'react'
import backround from '../../assets/backround.svg'
import photo from '../../assets/photo.svg'
import gradient from '../../assets/Gradient.svg'
import arrow from '../../assets/Arrow.svg'
import fasw from '../../assets/fasew.png'
// import { FaReact } from "react-icons/fa";

export default function index() {
		return (
				<div className='w-full h-[530px] m-auto bg-[#11071F] relative mt-[90px]'>
					<div className='w-[1263px] m-auto'>
					<div className='flex ml-[210px] absolute mt-[130px]'>
							<div className=''>
							<img src={backround} alt="" /></div>
							<div className=' ml-[-320px] mt-[-70px]'>
							<img src={gradient} alt="" /></div>
							<div className=' ml-[-315px] w-[270px]'>
							<img src={fasw} alt="" /></div>
      </div>
						<div className='ml-[420px] mt-[50px] absolute'>
							<img src={arrow} alt="" /></div>
						<div className='font-mono text-[white] flex ml-[550px] text-[20px] mt-[60px] absolute'>
							<div>Здравствуйте,</div> 
							<div className='ml-[10px] text-[#7127BA]'>Я Кайыпова Даткайым.</div>
						</div>
						<div className='text-white text-[30px] font-medium ml-[550px] mt-[150px] absolute'>Я являюсь <br /> фронтенд-разработчиком.</div>
						<div className='text-white text-[25px] font-medium ml-[550px] mt-[350px] absolute'>Я владею такими навыками, как:</div>
						{/* <FaReact size={200}/> */}
					</div>
				</div>
		)
}
