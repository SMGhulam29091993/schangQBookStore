import React, { createContext, useContext } from "react";

const bookContext = createContext();

const useBookCustomHook = ()=>{
    const value = useContext(bookContext);
    return value;
}

const BookProvider = ({children})=>{
    return (
        <bookContext.Provider>
            {children}
        </bookContext.Provider>
    )
}

export default BookProvider;