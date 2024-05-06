import React,{createContext,useState} from 'react'

export const ColorContext = createContext();


export default function ColorContextProvider(props){
    const[DarkMode,setDarkMode]=useState(false);
    return(
        <ColorContext.Provider
        value={{DarkMode,setDarkMode}}>
        {props.children}
        </ColorContext.Provider>
    )
}