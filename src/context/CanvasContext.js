"use client"

import { createContext, useContext, useRef, useState } from "react";

const Canvas = createContext();
 
export const CanvasContext = ({ children }) => {

    const fabricObj = useRef(null);
    const [canvas, setCanvas] = useState({});
    const [colorSelect, setColorSelect] = useState("gray"); 
    const [textSearching, setTextSearching] = useState(''); 
    const [objectSelectForDelete, setObjectSelectForDelete] = useState(false);

    const colorList = ['red', 'green', 'blue', 'gray', 'tomato', 'orange']
    const values = {
        fabricObj,
        canvas, setCanvas,
        colorSelect, setColorSelect,
        textSearching, setTextSearching,
        objectSelectForDelete, setObjectSelectForDelete,
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
