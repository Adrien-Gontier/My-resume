import React from 'react'

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/experiences">Experiences</Link>
      <Link to="/trainning">Trainning</Link>
      <Link to="/hardskills">Hard Skills</Link>
      <Link to="/softskills">Soft Skills</Link>
      <Link to="/hobbies">Hobbies</Link>
    </div>
  )
}