import React, { useEffect, useState } from 'react';
import SidePanel from '../Shared/SidePanel';
import { useBookCustomHook } from '../../ContextAPI/BookContext';

const AppLayout = () => (WrappedComponent)=> {
    return (props)=>{
        const {book} = useBookCustomHook();
        // const [details, setDetails] = useState(null);
     
        // useEffect(()=>{
        //     const fetchBookDetails = async ()=>{
        //         try {
        //             const response = await fetchData();
        //             setDetails(response)
        //         } catch (error) {
        //             console.log(`Error in AppLayout UseEffect ${error}`);
        //         }
        //     }

        //     fetchBookDetails();
            
        // },[fetchData])
        return (
            <main style={{height:"calc(100vh - 4rem)"}} className='flex flex-col sm:flex-row'>
                <div className=' border-r-2 border-red-100 w-full h-72 sm:w-80 sm:h-full'>
                    <SidePanel details={book}/>
                </div>
                <div className='flex-1'>
                    <WrappedComponent details={book} {...props}/>
                </div>
            </main>
        )
    }
}

export default AppLayout;