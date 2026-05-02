"use client";

import React, {useState} from 'react'
import { Phone, MessageCircle, Mail } from "lucide-react";
import { getTheme } from '../components/getTheme';
const contact = () => {
  getTheme()
    const [message,setmessage] = useState('')
  const allbtn = [
    { name: "Whatsapp", set: "whatsapp", icon: <MessageCircle size={16} /> },
    { name: "Gmail", set: "gmail", icon: <Mail size={16} /> },
  ];

  function sendWhatsapp () {
    if (!message) return;
    const url = `https://wa.me/${9024572602}?text=${encodeURIComponent(message)}`
    window.open(url,'_blank')
  }

  function sendGmail () {
    if (!message) return;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&body=${encodeURIComponent(message)}`
    window.open(url,'_blank')
  }
  function sendMessage (messtype: string) {
    if (messtype == 'whatsapp') sendWhatsapp();
    if (messtype == 'gmail') sendGmail()
  }

  return (
    <div className="w-full h-screen p-3 px-7">
      <h1 className="font-bold text-sm text-gray-700 dark:text-gray-200 flex items-center gap-3">
        <Phone size={15} />
        CONTACT US
      </h1>

      <div className="mt-5 text-xs font-bold dark:text-gray-400">
          You want to join the team, or have any enquiries
      </div>
      <div className="flex justify-between p-4 mt-5 rounded-3xl max-md:flex-col  bg-[#005fa3] dark:bg-[#01253e] border dark:border-gray-600">
        {/* let */}
        <div className="h-full flex flex-col justify-between items-start w-full text-white">
          <h1 className="text-3xl font-bold">
            Let us build together
          </h1>

          <h1 className="text-sm font-bold mt-6 text-gray-300 flex gap-3 items-center ">
           <Mail size={16} /> Gmail: davidayokanmbi47@gmail.com
          </h1>

          <h1 className="text-sm font-bold mt-6 text-gray-300 flex gap-3 items-center ">
           <MessageCircle size={16}/> Whatsapp: 09024572602
          </h1>
        </div>

        <div className="w-full max-md:mt-7">
        <textarea
        onChange={(e) => setmessage(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 dark:text-white font-bold rounded-2xl w-full min-h-30 p-3 text-xs"
          placeholder="Type here"
          id=""
        ></textarea>

        {/* send button */}
        <div className="w-full justify-end flex gap-3 items-center">
          <div className="p-2 flex gap-3 items-center rounded-full">
            {allbtn.map((item, e) => (
            <button 
            onClick={() => sendMessage(item.set)}
            disabled={!message}
            className="bg-[#007ad1] dark:bg-[#004d84] p-3 rounded-full flex gap-3 items-center cursor-pointer hover:shadow-md">
                <span className="font-bold text-white text-xs">{item.name}</span>
                <span className='text-white'>{item.icon}</span>
            </button>
          ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default contact;
