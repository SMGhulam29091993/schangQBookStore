import React from 'react';
import axios from "axios";



const Home = () => {
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