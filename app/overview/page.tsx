"use clients"

import React from 'react'
import {Menu,House,DollarSign,Settings,ShoppingBag,ShoppingCart,Mail,Users,Bell,Info} from 'lucide-react'

const page = () => {
    const STATS = [
            {name:'Totals',value: 1200,icon: <House size={40}/>},
            {name:'Product',value: 3000 + "+",icon: <ShoppingBag size={40} />},
            {name:'Clients',value: 300 + "+",icon: <Users size={40}/>},
            {name:'Orders',value: 4000+ "+",icon: <ShoppingCart size={40}/>},
    
        ]
  return (
    <div className="h-full overflow-y-auto pb-40">
      <h1 className="p-3 text-lg font-bold">
        Overview
      </h1>

        <div className="w-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3">
            {STATS.map((item,e) => (
                <>
                    <div className="w-full bg-gray-100 p-3 flex flex-col justify-between rounded-xl h-40">
                        <span className="flex gap-2 items-end">
                            <span className="p-3 bg-gray-200 rounded-full">
                                {item.icon}
                            </span>

                            <span className="text-xs p-2 bg-blue-100 rounded-full text-blue-800 font-bold">
                                {item.name}
                            </span>
                        </span>

                        <h1 className="text-3xl font-bold py-4 text-blue-700 rounded-full px-3">
                            {item.value}
                        </h1>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default page
