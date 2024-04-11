import React, { useState } from 'react';
import AppLayout from '../Components/Specifics/AppLayout';
import BookCard from '../Components/Shared/BookCard';
import { useBookCustomHook } from '../ContextAPI/BookContext';



const Home = ({details}) => {
  console.log("Home : ", details);
  const {filterBook} = useBookCustomHook();
  const pageSize = 8  ;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filterBook.length/pageSize);
  const startIndex = (currentPage-1)*pageSize;
  const endIndex = Math.min(startIndex+pageSize, filterBook.length);

  return (
    <>
      <h1 className='mt-8 sm:m-1 uppercase text-2xl text-orange-700 font-bold text-center'>Books</h1>
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {filterBook.slice(startIndex,endIndex).map((detail)=>(
          <BookCard key={detail.id} detail={detail}/>
        ))}
      </div>
      <div className='flex gap-2 items-center justify-center mt-3'>
        <button onClick={()=>setCurrentPage(1)} className='bg-blue-500 text-white p-2 rounded-full'>First Page</button>
        <button onClick={()=>setCurrentPage(currentPage-1)} 
          className={`bg-blue-500 text-white  p-2 rounded-full ${startIndex === 0?'cursor-not-allowed opacity-50' : ''}`}>Prev Page</button>
        {Array.from({length : totalPages}, (_,i)=>(
          <button key={i} onClick={()=>setCurrentPage(i+1)} className='bg-blue-500 text-white  p-2 rounded-full'>{i+1}</button>
        ))}
        <button onClick={()=>setCurrentPage(currentPage+1)} 
          className={`bg-blue-500 text-white p-2 rounded-full ${endIndex === filterBook.length ? 'cursor-not-allowed opacity-50' : ''}`}>
            Next Page</button>
        <button onClick={()=>setCurrentPage(totalPages)} className='bg-blue-500 text-white p-2 rounded-full'>Last Page</button>
      </div>
      
      
    </>
    
  )
}

export default AppLayout()(Home);