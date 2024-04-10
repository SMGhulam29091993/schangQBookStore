import React from 'react'


const SidePanel = ({details}) => {
    console.log(details);

  return (
    <>
        <h1 className='text-center text-xl font-semibold text-amber-900 m-2'>Filter</h1>
        <div className=''>
            <form className='p-2 flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <label className='font-semibold whitespace-nowrap'>Genre : </label>
                    <select id='genre' className='border rounded-lg p-3 w-full' >
                        <option >Choose Genre</option>
                        {details?.map((detail)=>(
                            <option key={detail.id} value={detail.volumeInfo.categories}>{detail.volumeInfo.categories}</option>
                        ))}
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <label className='font-semibold whitespace-nowrap'>Author : </label>
                    <select id='genre' className='border rounded-lg p-3 w-full' >
                        <option >Choose Author</option>
                        {details?.map((detail)=>(
                            detail.volumeInfo.authors?.map((author)=><option key={detail.id} value={author}>{author}</option>)
                        ))}
                    </select>
                </div>
                <button className='bg-blue-600 rounded-lg p-3 text-white uppercase font-semibold hover:opacity-90'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default SidePanel