"use client"

import {Home,Code,Phone,Wrench} from 'lucide-react';
import Link from 'next/link'
import {usePathname}from 'next/navigation'
import {motion} from 'framer-motion'

const BottomNav = () => {
    const pathname = usePathname()
    const navs = [
        {name:'Home', icon: <Home size={16}/>,path:'/'},
        {name:'Skills', icon: <Code size={16}/>,path:'/skills'},
        {name:'Projects', icon: <Wrench size={16}/>,path:'/projects'},
        {name:'Contact', icon: <Phone size={16}/>,path:'/contact'},
    ]

    return(
        <div className="sticky bottom-0 right-0 flex justify-end items-center p-4">
            <div className="p-2 bg-transparent backdrop-blur-sm border flex justify-around items-center border-gray-300 dark:border-gray-600/70 rounded-full">
                {navs.map((item,e) => (
                    <Link href={item.path}
                    className={`flex relative gap-3 p-2 items-center`}>
                        {pathname == item.path && (
                            <>
                                <motion.div
                            layoutId='navbar-indicator'
                            className='absolute inset-0 -z-10 bg-[#005fa3] rounded-full'
                            transition={{type:'spring',bounce:0.2,duration:0.6}}
                            />
                            </>
                        )}
                        
                            <span className={`font-bold text-xs text-[#005fa3] max-md:hidden ${pathname == item.path ? 'text-white' : 'dark:text-[#0e9bff]'}`}>{item.name}</span>
                            <span className={`font-bold text-[#005fa3] ${pathname == item.path  ? 'text-white' : 'dark:text-[#0e9bff]'}`}>{item.icon}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BottomNav