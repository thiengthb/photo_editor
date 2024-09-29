"use client"

import { createContext, useContext, useRef, useState } from "react";

const Canvas = createContext();
 
export const CanvasContext = ({ children }) => {

    const fabricObj = useRef(null);
    const [canvas, setCanvas] = useState({});
    const [colorSelect, setColorSelect] = useState("gray"); 
    const [group, setGroup] = useState({});

    const colorList = ['red', 'green', 'blue', 'gray', 'tomato', 'orange']
    const values = {
        fabricObj,
        canvas, setCanvas,
        colorSelect, setColorSelect,
        group, setGroup,
        colorList,
    }

    return (
        <Canvas.Provider value={values}>
            {
                children
            }
        </Canvas.Provider>
    )
}

export const useCanvasContext = () => useContext(Canvas);
