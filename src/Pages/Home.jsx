import React from 'react';
import AppLayout from '../Components/Specifics/AppLayout';
import BookCard from '../Components/Shared/BookCard';



const Home = ({details}) => {
   console.log("Home : ", details);

  return (
    <>
      <h1 className='m-2 uppercase text-2xl text-orange-700 font-bold'>Home</h1>
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {details?.map((detail)=>(
          <BookCard key={detail.id} detail={detail}/>
        ))}
      </div>
      
      
    </>
    
  )
}

export default AppLayout()(Home);