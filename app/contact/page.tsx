"use client";

import React, {useState} from 'react'
import { Phone, MessageCircle, Mail } from "lucide-react";
const contact = () => {
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
      <div className="w-full mt-5 rounded-3xl bg-[#005fa3] dark:bg-[#013d68] p-2">
        <textarea
        onChange={(e) => setmessage(e.target.value)}
          className="bg-gray-50 rounded-2xl w-full min-h-30 p-3 text-xs"
          placeholder="Type here"
          id=""
        ></textarea>

        {/* send button */}
        <div className="w-full justify-end flex gap-3 items-center">
          <div className="p-2 bg-white flex gap-3 items-center rounded-full">
            {allbtn.map((item, e) => (
            <button 
            onClick={() => sendMessage(item.set)}
            disabled={!message}
            className="bg-[#005fa3] p-2 rounded-full flex gap-3 items-center cursor-pointer hover:shadow-md">
                <span className="font-bold text-white text-xs">{item.name}</span>
                <span className='text-white'>{item.icon}</span>
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
