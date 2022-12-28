import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/experiences">Experiences</Link>
      <Link to="/trainning">Trainning</Link>
      <Link to="/hardskills">Hard Skills</Link>
      <Link to="/softskills">Soft Skills</Link>
      <Link to="/languages">Languages</Link>
      <Link to="/hobbies">Hobbies</Link>
    </div>
  )
}