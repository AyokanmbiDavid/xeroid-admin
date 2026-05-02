"use client"

import {useState,useEffect} from 'react'
import Navbar from "./components/Navbar"
import {Power} from 'lucide-react'
import Link from 'next/link'
import { getTheme } from './components/getTheme'

export default function Page () { 

    getTheme()
   return (
    <div className="h-full overflow-y-auto w-full p-4 pb-40">
      <div className="w-full  p-10 rounded-3xl bg-[#d1e4ff] dark:bg-[#001531]">
        <span className="text-xs p-2.5 rounded-full bg-[#005fa3] dark:bg-[#003b65] font-bold text-white">
          Fullstack developer
        </span>

        <div className="w-full text-[70px] max-md:text-[40px] dark:text-white font-extrabold mt-4">
          Build <span className="text-[#005fa3] dark:text-[#006bb7]">Intelligence</span> with Xeroid 
        </div>
        <div className="w-full text-[30px] dark:text-gray-300 max-md:text-[20px] text-gray-700 font-extrabold mt-4">
          Together let make something <span className="text-[#005fa3] dark:text-[#006bb7]">Impossible</span>
        </div>

        <div className="w-full flex justify-end mt-10 items-center">
        <Link 
        href="/skills"className="bg-[#1E8E3E] p-3 flex items-center gap-4  rounded-full font-bold text-white">
          <Power />
          Let get started
        </Link>
      </div>
      </div>
    </div>
  )
}