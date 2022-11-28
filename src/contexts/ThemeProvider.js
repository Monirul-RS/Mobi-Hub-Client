import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [dark, setDark] = useState(false);

    const handleDark = () =>{
        setDark(!dark);
        localStorage.setItem('dark-mode', !dark);
    };

    useEffect(() =>{
        if(dark){
            document.querySelector("html").setAttribute('data-theme', 'dark')
        }
        else{
            document.querySelector("html").setAttribute('data-theme', 'mytheme')
        }
    }, [dark])

    useEffect(() =>{
       const localDark = JSON.parse(localStorage.getItem('dark-mode')) ;
       setDark(localDark)
    }, [])

    const information ={handleDark, dark}
    return (
        <ThemeContext.Provider value={information}>
                {children}
        </ThemeContext.Provider >
    );
};

export default ThemeProvider;