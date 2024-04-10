import React, { useState } from 'react'
import { useBookCustomHook } from '../../ContextAPI/BookContext';



const SidePanel = ({details}) => {
    const [selectedGenre,setSelectedGenre] = useState("");
    const [selectedAuthors,setSelectedAuthors] = useState("");

    const {filterByAuthors, filterByGenre, filterByBoth,fetchData} = useBookCustomHook();

    const handleChange = (e)=>{
        if(e.target.id === 'genre'){
            setSelectedGenre(e.target.value);
        }
        if(e.target.id === "author" ){
            setSelectedAuthors(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (selectedAuthors){
            filterByAuthors(selectedAuthors);
        }else if (selectedGenre){
            filterByGenre(selectedGenre);
        }else if(selectedAuthors && selectedGenre){
            filterByBoth(selectedAuthors,selectedGenre);
        }
    }
    
    const handleFilterClear = (e)=>{
        e.preventDefault()
        setSelectedAuthors("");
        setSelectedGenre("");
        filterByAuthors("");
        filterByGenre("");
        fetchData();
    }

  return (
    <>
        <h1 className='text-center text-xl font-semibold text-amber-900 m-2'>Filter</h1>
        <div className=''>
            <form className='p-2 flex flex-col sm:flex-row md:flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <label className='font-semibold whitespace-nowrap'>Genre : </label>
                    <select id='genre' className='border rounded-lg p-1 md:p-3 w-full'
                         onChange={handleChange} value={selectedGenre} >
                        <option value="" >Choose Genre</option>
                        {details?.map((detail)=>(
                            <option key={detail.id} value={detail.volumeInfo.categories} >{detail.volumeInfo.categories}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <label className='font-semibold whitespace-nowrap'>Author : </label>
                    <select id='author' className='border rounded-lg p-1 md:p-3 w-full'
                        onChange={handleChange} value={selectedAuthors} >
                        <option >Choose Author</option>
                        {details?.map((detail)=>(
                            detail.volumeInfo.authors?.map((author, index)=><option key={`${detail.id}-${index}`} value={author}>{author}</option>)
                        ))}
                    </select>
                </div>
                <button className='bg-blue-600 rounded-lg p-3 text-white uppercase font-semibold hover:opacity-90'>Submit</button>
                <button className='bg-green-600 rounded-lg p-2 text-white uppercase font-semibold hover:opacity-90' 
                    onClick={handleFilterClear}>Clear Filter</button>
            </form>
            
        </div>
    </>
  )
}

export default SidePanel