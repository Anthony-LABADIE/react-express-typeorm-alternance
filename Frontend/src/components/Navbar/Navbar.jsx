import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar--link">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <li className="navbar--link-item">Home</li>
          </NavLink>
          <NavLink to="/wilder" style={{ textDecoration: 'none' }}>
            <li className="navbar--link-item">Wilder</li>
          </NavLink>
          <NavLink to="/autre" style={{ textDecoration: 'none' }}>
            <li className="navbar--link-item">Autre</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
