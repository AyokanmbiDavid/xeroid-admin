"use client"

import React,{useState,useEffect} from 'react'
import {Bell,User2,Rocket,Command,Moon,Hand,Sun} from 'lucide-react'

const Navbar = () => {
  const [isDark,setIsDark] = useState<String>()

  useEffect(() => {
    let isTheme = localStorage.getItem('theme')
    if (isTheme) {
      setIsDark(JSON.parse(isTheme));
    } else {
      setIsDark('light')
    }
    
  }, [])

 const toggleTheme = () => {
  if (isDark == 'light') {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme',JSON.stringify('dark'));
    setIsDark('dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme',JSON.stringify('light'))
    setIsDark('light')
  }
 }
  return (
    <>
       <div className="sticky top-0 w-full z-20 p-4 max-md:px-2 bg-white dark:bg-gray-900 flex justify-between items-center">
          <div className="flex items-center">
            <span className="p-2 rounded-2xl text-white bg-[#005fa3]">
              <Command />
            </span>

            <span className='ml-4 font-bold dark:text-gray-200'>
              Xeroid Admin
            </span>
          </div>

          {/* left side */}
          <div className="flex items-center">
            <button 
            onClick={() => toggleTheme()}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-[#005fa3] dark:text-white cursor-pointer duration-200">
              {isDark == 'light' ? <Moon /> : <Sun/>}
            </button>

            <a href="mailto:davidayokanmbi47@gmail.com?subject=Hello&body=Hi there, I want to work with you."
            className='bg-[#1E8E3E] p-3 text-xs shrink-0 text-white font-bold flex items-center gap-3 ml-5 rounded-full'>
              <Hand size={16}/>
              Let's work
            </a>
          </div>
       </div>
    </>
  )
}

export default Navbar
