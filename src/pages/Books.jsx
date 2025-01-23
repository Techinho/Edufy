import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookDetails from '../components/Books/BookDetails'
import BooksList from '../components/Books/BooksList'
import BooksByCategory from '../components/Books/BooksByCategorie'

const Books = () => {
  return (
   <Routes>
    <Route path='/:id' element={<BookDetails/>} />
    <Route path='/' element={<BooksList/>} />
    <Route path="/category/:category" element={< BooksByCategory />} />
   </Routes>
  )
}

export default Books