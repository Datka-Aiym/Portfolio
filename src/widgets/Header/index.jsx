import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo (1).svg'

export default function () {
		return (
			<div className=' fixed top-0 left-0 z-10 w-full h-[90px] m-auto bg-[#1A0B2E] '>
				<div className='w-[1263px] m-auto '>
				<div>
					<Link to='/'>
					<div className='ml-[300px] mt-[21px] absolute'>
				 <img src={logo} alt="" /></div>
					</Link>
				</div>
				<div className='text-white text-[20px] flex font-medium mt-[26px] absolute ml-[600px] gap-[95px] scroll-smooth'>
				<a href="#dom" className="text-xl hover:text-gray-400">Дом</a>
				<a href="#skills" className=" hover:text-gray-400">Навыки</a>
     <a href="#projects" className="ml-[-10px] text-xl hover:text-gray-400">Проекты</a>
				</div>
				</div>
			</div>
		)
}

