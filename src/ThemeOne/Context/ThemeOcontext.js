import React,{useState,useEffect, createContext} from 'react'
import { useContext } from 'react'

const themeoneContext= createContext()

 export const ThemeOneProvider=({children})=>
{

    useEffect(()=>
    {
        const root= document.documentElement;
        
       const primaryColor=(getComputedStyle(root).getPropertyValue('--primary-color'))
        localStorage.setItem('color',primaryColor);

      
    })
    const fetchedColor= localStorage.getItem('color ')
       console.log(JSON.parse(fetchedColor))
    return(
        <themeoneContext.Provider >
           {children}
        </themeoneContext.Provider>
    )
}
export const useThemeOne =()=>useContext(themeoneContext);
