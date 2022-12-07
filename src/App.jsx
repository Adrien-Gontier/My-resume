import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
