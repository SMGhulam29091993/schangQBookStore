import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Specifics/Header';
import Loader from './Components/Specifics/Loader';
import BookProvider from './ContextAPI/BookContext';

const Home = lazy(()=>import("./Pages/Home"));
const About = lazy(()=>import("./Pages/About"));
const Search = lazy(()=>import("./Pages/Search"));
const Books = lazy(()=>import("./Pages/Books"));
const PageNotFound = lazy(()=>import("./Pages/PageNotFound"));

const App = () => {
  return (
    <BookProvider>
      <BrowserRouter>
      <Header/>
        <Suspense fallback={<Loader/>}>
          <Routes>
            
            <Route path='/' element={<Home />} />       
            <Route path='/about' element={<About />} />
            <Route path='/books/:bookID' element={<Books />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<PageNotFound />} />
            
          </Routes>
        </Suspense>
      </BrowserRouter>

    </BookProvider>
    
  )
}

export default App;