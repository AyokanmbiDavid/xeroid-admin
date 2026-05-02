'use client'

import React from 'react'
import {useState,useEffect} from 'react'

export const getTheme = () => {
    useEffect(() => {
      let checktheme = (localStorage.getItem('theme')) || 'light';

       if (JSON.parse(checktheme) == 'light'){
        document.documentElement.classList.remove('dark');
       } else {
        document.documentElement.classList.add('dark')
       }
    }, [])
    
    return (
        <div></div>
  )
}

