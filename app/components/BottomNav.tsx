"use client"

import {Home,Code,Phone} from 'lucide-react';
import Link from 'next/link'

const BottomNav = () => {
    const navs = [
        {name:'Home', icon: <Home/>,path:'/'},
        {name:'Skills', icon: <Code/>,path:'/skill'},
        {name:'Contact', icon: <Phone/>,path:'/contact'},
    ]

    return(
        <div className="sticky bottom-0 right-0 flex justify-end items-center p-4">
            <div className="p-2 bg-transparent backdrop-blur-sm border flex justify-around items-center border-gray-100 rounded-full">
                {navs.map((item,e) => (
                    <Link href={item.path}
                    className={`flex gap-3 items-center rounded-full  text-sm font-bold p-2 ${item.path == '/' ? 'bg-[#005fa3] text-white' : 'hover:bg-gray-100'}`}>
                        <span className="max-sm:hidden">
                            {item.name}
                        </span>
                        <span >
                            {item.icon}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BottomNav