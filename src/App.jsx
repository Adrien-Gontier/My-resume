import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/sass/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Training from './pages/Training'
import HardSkills from './pages/HardSkills'
import SoftSkills from './pages/SoftSkills'
import Hobbies from './pages/Hobbies'
import Title from './components/Title'
import Languages from './pages/Languages'
import LanguageContext from './context/LanguageContext'
import OneExperience from './pages/OneExperience'
import OneTraining from './pages/OneTrainning'

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
                    <Route
                        path="/oneexperience/:id"
                        element={<OneExperience />}
                    />
                    <Route path="/training" element={<Training />} />
                    <Route path="/onetraining/:id" element={<OneTraining />} />
                    <Route path="/hardskills" element={<HardSkills />} />
                    <Route path="/softskills" element={<SoftSkills />} />
                    <Route path="/languages" element={<Languages />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>
            </LanguageContext.Provider>
        </BrowserRouter>
    )
}
