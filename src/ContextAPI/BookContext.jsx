import React, { createContext, useContext } from "react";
import axios from "axios";

const bookContext = createContext();

export const useBookCustomHook = ()=>{
    const value = useContext(bookContext);
    return value;
}

const BookProvider = ({children})=>{



    const fetchData = async ()=>{
        try {
            const data = await axios.get(`https://d1krvzwx5oquy1.cloudfront.net/books.json`);
            const responseData = data.data;
            console.log(responseData);
            const response = responseData;
            if(response){
                return response;
            }
            
        } catch (error) {
            console.log(`Home Data Fetch ${error}`);
        }
    }

    const bookCustomValue = {fetchData}

    return (
        <bookContext.Provider value={bookCustomValue}>
            {children}
        </bookContext.Provider>
    )
}

export default BookProvider;