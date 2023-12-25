import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Sun from '../images/brightness.png';
import Moon from '../images/moon.png';

export default function NavigationBar() {

  let NavOpen = ()=>{
   let nav = document.getElementById('nav-open');
   return nav.style.scale = '1';
  }

  let NavClose = ()=>{
    let nav = document.getElementById('nav-open');
    return nav.style.scale = '0';
  }

  const changeBackground = ()=>{
    
    let moon = document.getElementById('moon');
    let body = document.body;
    let Navig = document.querySelector('header');
    let navOpen = document.querySelectorAll('nav a');
    let logo = document.querySelector('.logo');
    let ProjectCard = document.querySelectorAll('.cards-container .card');
    let contactDetails = document.querySelectorAll('.contactbox p a');




    let footer = document.querySelector('footer');
    let footerAncors = document.querySelectorAll('.footer-nav a');
    
    let front_end_skill_span = document.querySelectorAll('.front-end-skills span')

    body.classList.toggle('dark');
    
    if(body.classList.contains('dark')){
      moon.src = Sun
      body.style.backgroundColor = "#2a2929"
      body.style.color='white';
      Navig.classList.add('dark-color');
      logo.style.color = 'orange';
      footer.classList.add('dark-color');

       // NavBar Ancor Tags
      for(let i = 0;i<navOpen.length;i++){
        navOpen[i].style.color = 'white' 
      }

      // Skills Border
      for(let i = 0;i<front_end_skill_span.length;i++){
        front_end_skill_span[i].style.border = '2px solid orange' 
      }

      // Project Cards
      for(let i = 0;i<ProjectCard.length;i++){
        ProjectCard[i].style.backgroundColor = '#2a2929' 
        ProjectCard[i].style.color = 'white' 
        ProjectCard[i].style.boxShadow = '0px 0px 7px seagreen'
      }

      // Contact Ancor Tags
      for(let i = 0;i<contactDetails.length;i++){
        contactDetails[i].style.color = 'white' 
      }

      // footer Ancors Tags
      for(let i = 0;i<footerAncors.length;i++){
        footerAncors[i].style.color = 'white' 
      }
    }
    else{
      moon.src = Moon
      body.style.backgroundColor = "rgba(173, 216, 230, 0.03)"
      body.style.color = 'black'
      Navig.classList.remove('dark-color');

      // NavBar Ancor Tags
      for(let i = 0;i<navOpen.length;i++){
        navOpen[i].style.color = 'black' 
      }

      // Skills Border
      for(let i = 0;i<front_end_skill_span.length;i++){
        front_end_skill_span[i].style.border = '2px solid black' 
      }

      // Contact Ancor Tags
      for(let i = 0;i<contactDetails.length;i++){
        contactDetails[i].style.color = 'black' 
      }

      // Project Cards
      for(let i = 0;i<ProjectCard.length;i++){
        ProjectCard[i].style.backgroundColor = 'white' 
        ProjectCard[i].style.color = 'black' 
        ProjectCard[i].style.boxShadow = 'none'
      }

      // footer Ancors Tags
      for(let i = 0;i<footerAncors.length;i++){
        footerAncors[i].style.color = 'black' 
      }

      logo.style.color = 'black';
      footer.classList.remove('dark-color');
    }
  }
  return (
    <div className='header-container'>
      <header className='d-flex align-items-center justify-content-between ps-4 pe-3 pt-2 pb-2'>
      <h3><i className="fa-solid fa-user-graduate logo"></i></h3>
    <i className="fa-solid fa-bars nav-bar-icon" onClick={NavOpen}></i>
      <nav id='nav-open'>
      <i className="fa-solid fa-xmark close-nav" id='nav-close' onClick={NavClose}></i>
        <NavLink to={'/'} className={'a1'}>Home</NavLink>
        <NavLink to={'/skills'} className={'a2'}>Skills</NavLink>
        <NavLink to={'/projects'} className={'a3'}>Projects</NavLink>
        <NavLink to={'/about'} className={'a4'}>About Me</NavLink>
        <NavLink to={'/contact'} className={'a5'}>Contact Me</NavLink>
        <NavLink to={'/resume'} className={'a6'}>Resume</NavLink>
        <Link onClick={changeBackground}><img src={require('../images/moon.png')} id='moon' width='25rem' alt='moon'/></Link>
    </nav>
    </header>
    </div>
  )
}
