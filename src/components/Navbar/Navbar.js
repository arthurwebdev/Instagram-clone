import React, { memo } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import SearchBox from '../SearchBox/SearchBox'
import SearchAnswer from '../SearchAnswer/SearchAnswer'

function Navbar() {

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            <SearchBox />
            <SearchAnswer />
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/></NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/></NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={IMAGES.profilImage} className="icon user-profile" /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default memo(Navbar)