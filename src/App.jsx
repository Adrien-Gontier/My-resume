import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/sass/App.css'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import Experiences from './routes/Experiences'
import Training from './routes/Training'
import HardSkills from './routes/HardSkills'
import SoftSkills from './routes/SoftSkills'
import Hobbies from './routes/Hobbies'
import Title from './components/Title'
import Languages from './routes/Languages'
import LanguageContext from './context/LanguageContext'

export default function App() {
    const [language, setLanguage] = useState('english')

    return (
        <BrowserRouter>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <Title />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/hardskills" element={<HardSkills />} />
                    <Route path="/softskills" element={<SoftSkills />} />
                    <Route path="/languages" element={<Languages />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>
            </LanguageContext.Provider>
        </BrowserRouter>
    )
}
