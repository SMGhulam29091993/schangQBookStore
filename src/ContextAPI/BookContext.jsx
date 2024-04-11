import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const bookContext = createContext();

export const useBookCustomHook = ()=>{
    const value = useContext(bookContext);
    return value;
}

const BookProvider = ({children})=>{

    const [book, setBook] = useState(null)
    const [filterBook, setFilterBook] = useState([])

    const fetchData = async ()=>{
        try {
            const data = await axios.get(`https://d1krvzwx5oquy1.cloudfront.net/books.json`);
            const response = data.data;
            if(response){
                setBook(response);
                setFilterBook(response)
                return response;
            }
            
        } catch (error) {
            console.log(`Home Data Fetch ${error}`);
        }
    }

    useEffect(()=>{
        fetchData()
    },[]);
    
    const filterByGenre = (genre)=>{
        const filteredBooks = book.filter(book => book.volumeInfo.categories && book.volumeInfo.categories.includes(genre)); 
        console.log(filteredBooks);
        setBook(filteredBooks); 
        setFilterBook(filteredBooks);
    }
    
    const filterByAuthors = (authors)=>{
        const filteredBooks = book.filter(book => book.volumeInfo.authors.includes(authors));
        console.log(filteredBooks);
        setBook(filteredBooks);
        setFilterBook(filteredBooks);
    }
    const filterByBoth = (authors,genre)=>{
        const filteredBooks = book.filter(book => book.volumeInfo.authors.includes(authors) && book.volumeInfo.categories && book.volumeInfo.categories.includes(genre));
        console.log(filteredBooks);
        setBook(filteredBooks);
        setFilterBook(filteredBooks)
    }

    const bookCustomValue = {fetchData, filterByAuthors, filterByGenre, filterByBoth, book, filterBook}

    return (
        <bookContext.Provider value={bookCustomValue}>
            {children}
        </bookContext.Provider>
    )
}

export default BookProvider;