import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import Experiences from './routes/Experiences'
import Trainning from './routes/Trainning'
import HardSkills from './routes/HardSkills'
import SoftSkills from './routes/SoftSkills'
import Hobbies from './routes/Hobbies'
import Title from './components/Title'
import Languages from './routes/Languages'

export default function App() {

  return (
    <BrowserRouter>
    <Title />
    <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/trainning" element={<Trainning />} />
          <Route path="/hardskills" element={<HardSkills />} />
          <Route path="/softskills" element={<SoftSkills />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
    </BrowserRouter>
  )
}
