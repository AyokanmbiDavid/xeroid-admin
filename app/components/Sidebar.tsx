"use client"

import React, {useState}from 'react'
import {Menu,House,DollarSign,Settings,ShoppingBag,ShoppingCart,Mail,Users,Bell,Info} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
    const [isSidebaropen,setisSidebaropen] = useState(false)
    const pathname = usePathname()
    const ICONS = [
        {name:'Dashboard',icon: <House size={15}/>,path:"/overview"},
        {name:'Product',icon: <ShoppingBag size={15} />,path:"/product"},
        {name:'Clients',icon: <Users size={15}/>,path:"/clients"},
        {name:'Orders',icon: <ShoppingCart size={15}/>,path:"/orders"},
        {name:'Messages',icon: <Mail size={16}/>,path:"/messages"},

    ]
  return (
    <div className={`relative h-full p-3 bg-gray-100 z-10 transition-all duration-300 ease-in-out flex flex-col items-start shrink-0 ${isSidebaropen ? 'w-64' : 'w-18'}`}>
      <button 
      onClick={() => setisSidebaropen(prev => !prev)}
      className="p-3 hover:bg-gray-200 transition duration-150 rounded-xl cursor-pointer">
        <Menu size={15} />
      </button>
      
        
     <div className="w-full flex mt-10 flex-col ga-3">
        {ICONS.map((item,e) => (
            <>
            <Link href={item.path} key={e} className={`w-full p-3 py-4 flex items-center gap-3 rounded-xl ${pathname == item.path ? 'bg-gray-200' : 'hover:bg-gray-50'}`}>
                <span className='p-1 py-0.5'>
                    {item.icon}
                </span>

                {isSidebaropen && 
                
                <span className='text-sm font-semibold text-gray-700'>
                    {item.name}
                </span>}
            </Link>
            </>
        ))}

     </div>
    </div>
  )
}

export default Sidebar
