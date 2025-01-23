import React from 'react'
import AssignmentList from '../components/Assignments/AssignmentList'
import AssignmentForm from '../components/Assignments/AssignmentForm'
import { Route, Routes } from 'react-router-dom'

const Assignment = () => {
  return (
    <Routes>
    <Route path="/" element={<AssignmentList />} />
    <Route path="/new" element={<AssignmentForm/>} />
    <Route path="/edit/:id" element={<AssignmentForm/>} />
  </Routes>
  )
}

export default Assignment