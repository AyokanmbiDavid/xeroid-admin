"use clients"

import React from 'react'
import {Hand,Container} from 'lucide-react'
import {getTheme} from '../components/getTheme'
const skills = () => {

  const front = ['HTML','CSS','JavaScript','Tailwind','Bootstrap','Api','React','NextJs',]
  const back = ['NodeJS','MongoDB','Express',]
  return (
    <div className="h-screen overflow-y-auto w-full p-4 px-7 pb-40">
      <h1 className="text-sm font-semibold text-gray-500">
          SKILLS SHOWCASE
      </h1>

     <div className="flex items-start gap-3 max-md:gap-0 max-md:flex-col">
       {/* frontend */}
      <div className="mt-5 w-full p-3 px-5 bg-gray-100 dark:bg-[#003357] rounded-4xl group hover:bg-[#005fa3] duration-300">
        <h1 className="text-sm font-bold text-gray-700 dark:text-white flex items-center gap-3 group-hover:text-gray-200">
         <span className=" p-2 bg-[#005fa3] dark:bg-[#0162a7] rounded-full text-white group-hover:bg-white group-hover:text-[#005fa3]">
          <Hand size={12} />
         </span>
          FRONTEND
        </h1>
        <div className="grid grid-cols-4 max-md:grid-cols-3">
          {front.map((item,e) => (
            <div className="p-3 flex flex-col items-center justify-center gap-3">
              <span className="p-3 px-5 rounded-full text-white group-hover:bg-white  group-hover:text-[#005fa3] dark:text-white bg-[#005fa3]">{item.charAt(0)}</span>
              <span className="font-bold text-xs group-hover:text-white dark:text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

       {/* frontend */}
      <div className="mt-5 w-full p-3 px-5 bg-gray-100 dark:bg-[#003357] rounded-4xl group hover:bg-[#005fa3] duration-300">
        <h1 className="text-sm font-bold text-gray-700 dark:text-white flex items-center gap-3 group-hover:text-gray-200">
          <span className=" p-2 bg-[#005fa3] rounded-full text-white group-hover:bg-white group-hover:text-[#005fa3]">
          <Container size={12} />
         </span>
         Backend
        </h1>
        <div className="grid grid-cols-4">
          {back.map((item,e) => (
            <div className="p-3 flex flex-col items-center justify-center gap-3">
              <span className="p-3 px-5 rounded-full text-white group-hover:bg-white group-hover:text-[#005fa3] bg-[#005fa3]">{item.charAt(0)}</span>
              <span className="font-bold text-xs dark:text-white group-hover:text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
     </div>
      </div>
      
    </div>
  )
}

export default skills
