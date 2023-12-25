import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='text-center d-flex align-items-center flex-column gap-4'>
            <div className='footer-nav footer'>
                <Link to={'/'} className='a1'>Home</Link>
                <Link to={'/skills'} className='a2'>Skills</Link>
                <Link to={'/projects'} className='a3'>Projects</Link>
                <Link to={'/about'} className='a4'>About</Link>
                <Link to={'/contact'} className='a5'>Contact Me</Link>
                <Link to={'/resume'} className='a6'>Resume</Link>
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
