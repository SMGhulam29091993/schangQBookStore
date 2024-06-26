import React from 'react';
import { Link } from "react-router-dom";


const BookCard = ({detail}) => {
  
  
  return (
    <>
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[200px] m-4'>
          <Link to={`/books/${detail.id}`}>
            <img src={`${detail.volumeInfo.imageLinks?.thumbnail}`} alt="book-img" 
              className='h-[100px] sm:h-[150px] w-full object-center hover:scale-105 transition-scale duration-300' />
            <div className='p-3 w-full flex flex-col gap-2'>
              <p className='font-semibold truncate text-lg text-slate-700'>{detail.volumeInfo.title}</p>
              <p className='font-semibold truncate text-lg text-slate-700'>Author - {detail.volumeInfo.authors}</p>
              <p className='font-semibold truncate text-lg text-slate-700'>
                  Rating - {detail.volumeInfo.averageRating?detail.volumeInfo.averageRating:"No Rating Available"}/5</p>
            </div>
          </Link>     
        </div>
    </>
    
  )
}

export default BookCard;