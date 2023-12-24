import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {

  let NavOpen = ()=>{
   let nav = document.getElementById('nav-open');
   return nav.style.scale = '1';
  }

  let NavClose = ()=>{
    let nav = document.getElementById('nav-open');
    return nav.style.scale = '0';
  }
  return (
    <div className='header-container'>
      <header className='d-flex align-items-center justify-content-between ps-4 pe-3 pt-2 pb-2'>
      <h3><i className="fa-solid fa-user-graduate"></i></h3>
    <i className="fa-solid fa-bars nav-bar-icon" onClick={NavOpen}></i>
      <nav id='nav-open'>
      <i className="fa-solid fa-xmark close-nav" id='nav-close' onClick={NavClose}></i>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/skills'}>Skills</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/about'}>About Me</NavLink>
        <NavLink to={'/contact'}>Contact Me</NavLink>
        <NavLink to={'/resume'}>Resume</NavLink>
    </nav>
    </header>
    </div>
  )
}
