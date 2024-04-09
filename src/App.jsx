import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(()=>import("./Pages/Home"));
const About = lazy(()=>import("./Pages/About"));
const Search = lazy(()=>import("./Pages/Search"));
const Books = lazy(()=>import("./Pages/Books"));
const PageNotFound = lazy(()=>import("./Pages/PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books/:bookID' element={<Books />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;