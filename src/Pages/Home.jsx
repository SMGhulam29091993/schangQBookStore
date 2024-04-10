import React, { useEffect, useState } from 'react';

import BookList from '../Components/Shared/BookList';
import { useBookCustomHook } from '../ContextAPI/BookContext';
import AppLayout from '../Components/Specifics/AppLayout';



const Home = () => {
    const {fetchData} = useBookCustomHook();

    useEffect(()=>{
        fetchData();
        
    },[]);



  return (
    <h1>Home</h1>
  )
}

export default AppLayout()(Home);