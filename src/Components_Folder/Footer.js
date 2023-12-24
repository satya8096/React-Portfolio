import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='text-center d-flex align-items-center flex-column gap-4'>
            <div className='footer-nav'>
                <Link to={'/'}>Home</Link>
                <Link to={'/skills'}>Skills</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact Me</Link>
                <Link to={'/resume'}>Resume</Link>
            </div>
            <div className='footer-social-icons'>
                <Link to={'https://www.linkedin.com/in/katta-venkata-rama-satyanarayana-b5116224a/'} target='blank'><i className="fa-brands fa-linkedin"></i></Link>
                <Link to={'#'} target='blank'><i className="fa-brands fa-square-instagram"></i></Link>
                <Link to={'#'} target='blank'><i className="fa-brands fa-square-facebook"></i></Link>
                <Link to={'#'} target='blank'><i className="fa-brands fa-square-github"></i></Link>
          </div>
          <div>
                <h6 className='copy-right'>~Copyright © 2023 . All rights reserved by Satyanarayana Katta~</h6>
          </div>
    </footer>
  )
}
