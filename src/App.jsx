import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='/books/:bookID' element={<div>Book Page</div>} />
        <Route path='/search' element={<div>Search</div>} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;