"use client"

import Navbar from "./components/Navbar"
import {Power} from 'lucide-react'
import Link from 'next/link'

export default function Page () {
   return (
    <div className="h-full overflow-y-auto w-full p-4 pb-40">
      <div className="w-full  p-10 rounded-3xl bg-[#d1e4ff]">
        <span className="text-xs p-2.5 rounded-full bg-[#005fa3] font-bold text-white">
          Fullstack developer
        </span>

        <div className="w-full text-[70px] max-md:text-[40px] font-extrabold mt-4">
          Build <span className="text-[#005fa3]">Intelligence</span> with Xeroid 
        </div>
        <div className="w-full text-[30px] max-md:text-[20px] text-gray-700 font-extrabold mt-4">
          Together let make something <span className="text-[#005fa3]">Impossible</span>
        </div>

        <div className="w-full flex justify-end mt-10 items-center">
        <Link 
        href="/skills"className="bg-[#005fa3] p-3 flex items-center gap-4  rounded-full font-bold text-white">
          <Power />
          Let get started
        </Link>
      </div>
      </div>
    </div>
  )
}