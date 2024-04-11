import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AppLayout from '../Components/Specifics/AppLayout';



const Books = ({details}) => {
  console.log(details);
  const params = useParams();
  const bookId = params.bookID;
  console.log(bookId);
  const [books, setBooks] = useState("");

  const getBookDetail = ()=>{
    const data = details.find(detail=>(parseInt(bookId) === detail.id));
    console.log(data);
    setBooks(data)
  }
  
  useEffect(()=>{
    getBookDetail()
  },[])

  console.log(books);

  return (
    <>
      <div className='my-4 mx-auto w-full sm:w-[80%]  p-2'>
        <div className='flex flex-col sm:flex-row gap-2 items-start mb-4'>
          <img src={books && books.volumeInfo && books.volumeInfo.imageLinks.thumbnail} alt="book-cover" 
           className='h-40 w-36 sm:h-64 sm:w-52 object-center'  />
          <div className='flex-1 flex flex-col gap-2 '>
            <p className='text-xl font-semibold text-slate-700'>{books && books.volumeInfo &&books.volumeInfo.title}</p>
            <p className='text-md font-semibold text-slate-700'>{books && books.volumeInfo &&books.volumeInfo.subtitle}</p>
            <p className='text-sm font-semibold text-slate-700'>
            <ol type="a">
              {books && books.volumeInfo &&books.volumeInfo.authors ? (
                <>
                  <li>Authors :</li>
                  {books.volumeInfo.authors.map((author, i) => (
                    <li key={i}>- {author}</li>
                  ))}
                </>
              ) : null}
            </ol>

            </p>
            <p className='text-sm font-semibold text-slate-700'>
                Ratings :{books && books.volumeInfo &&books.volumeInfo.averageRating?
                  (`${books.volumeInfo.averageRating}/5`):("No Rating Available")}</p>
            <p className='text-sm font-semibold text-slate-700'>Categories : {books && books.volumeInfo &&books.volumeInfo.categories}</p>
            <div className='flex gap-2 flex-wrap'>
              <p className='text-xs font-semibold text-slate-500'>Publisher : {books && books.volumeInfo &&books.volumeInfo.publisher}</p>
              <p className='text-xs font-semibold text-slate-500'>Published Date : {books && books.volumeInfo &&books.volumeInfo.publishedDate}</p>
              <p className='text-xs font-semibold text-slate-500'>Content Version : {books && books.volumeInfo &&books.volumeInfo.contentVersion}</p>
              <p className='text-xs font-semibold text-slate-500'>Page Count : {books && books.volumeInfo &&books.volumeInfo.pageCount}</p>
            </div>
            <div className='flex gap-2 flex-wrap'> 
              <p className='text-xs font-semibold text-slate-600'>Country Available : {books && books.accessInfo &&books.accessInfo.country}</p>
              <p className='text-xs font-semibold text-slate-600'>Language Available : {books && books.volumeInfo &&books.volumeInfo.language}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              <p className='text-md font-semibold text-slate-900'>
                Price : 
                {books && books.saleInfo && books.saleInfo.retailPrice && books.saleInfo.retailPrice.amount
                  ? `  ${books.saleInfo.retailPrice.amount} ${books.saleInfo.retailPrice.currencyCode}`
                  : " Price Unavailable"}
              </p>
            </div>
              
          </div>
        </div>
       
          <p className='text-sm font-semibold text-slate-900'>{books && books.volumeInfo &&books.volumeInfo.description}</p>
    

      </div>
    </>
  )
}

export default AppLayout()(Books);