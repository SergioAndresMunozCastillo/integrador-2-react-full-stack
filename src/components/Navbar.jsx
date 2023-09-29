import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <ul className='nav-bar__nav-list'>
            <li className='nav-bar__nav-item'><NavLink className="nav-bar__nav-link" to="/">Inicio</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className="nav-bar__nav-link" to="/alta">Alta</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className="nav-bar__nav-link" to="/nosotros">Nosotros</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className="nav-bar__nav-link" to="/contacto">Contacto</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar