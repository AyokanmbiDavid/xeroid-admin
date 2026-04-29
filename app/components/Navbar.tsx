"use client"

import React from 'react'
import {Bell,User2,Rocket} from 'lucide-react'

const Navbar = () => {
  return (
    <>
        <div className="w-full sticky top-0 left-5 flex py-4 justify-between items-center">
            <div className="w-full p-3 px-4 bg-gray-100 rounded-xl flex justify-between items-center">
              <h1 className="text-md font-bold flex items-center gap-3 p-3 bg-black text-white rounded-full">
                <span className="max-sm:hidden">
                  Xeroid 
                </span>
                <Rocket size={17} />
              </h1>

            <div className="flex items-center gap-3 ">
              <Bell size={15}/>
              <span className="p-2 rounded-full bg-black text-white">
                <User2 size={15}/>
              </span>
                
              <span className="font-semibold p-2 text-sm rounded-full bg-gray-200">
                John Doe
              </span>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
