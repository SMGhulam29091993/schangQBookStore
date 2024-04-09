import React, { useEffect } from 'react';
import axios from "axios";
import SidePanel from '../Components/Shared/SidePanel';
import BookList from '../Components/Shared/BookList';



const Home = () => {
    const fetchData = async ()=>{
        try {
            const data = await axios.get(`https://d1krvzwx5oquy1.cloudfront.net/books.json`);
            const responseData = data;
            console.log(responseData.data);
        } catch (error) {
            console.log(`Home Data Fetch ${error}`);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <main style={{height:"calc(100vh - 4rem)"}} className='flex flex-col sm:flex-row'>
        <div style={{height:"100%", width:"25%"}} className=' border-r-2 border-red-100'>
            <SidePanel/>
        </div>
        <div className='flex-1'>
            <BookList/>
        </div>
    </main>
  )
}

export default Home;