"use client"

import React,{useState} from 'react'
import {Bell,User2,Rocket,Command,Moon,Hand} from 'lucide-react'

const Navbar = () => {
 
  return (
    <>
       <div className="sticky top-0 w-full z-20 p-4 max-md:px-2 bg-white flex justify-between items-center">
          <div className="flex items-center">
            <span className="p-2 rounded-2xl text-white bg-[#005fa3]">
              <Command />
            </span>

            <span className='ml-4 font-bold'>
              Xeroid Admin
            </span>
          </div>

          {/* left side */}
          <div className="flex items-center">
            <button className="p-2 rounded-full bg-gray-100 text-[#005fa3] cursor-pointer duration-200">
              <Moon />
            </button>

            <a href="mail:davidayokanmbi47@gmail.com"
            className='bg-[#005fa3] p-3 text-xs shrink-0 text-white font-bold flex items-center gap-3 ml-5 rounded-full'>
              <Hand size={16}/>
              Let work
            </a>
          </div>
       </div>
    </>
  )
}

export default Navbar
