import React from 'react'
import { Link } from 'react-router-dom'
import HomePic from '../images/portfolio pic.png';
export default function Home() {
  return (
    <div>
      <div className='home-main-container d-flex align-items-center justify-content-around'>
        <div className='home-left-side-text text-center'>
          <h3>I'm K Satyanarayna</h3>
          <h4 className='typing text-warning'>FrontEndDeveloper</h4>
          <p>A motivated individual with in-depth knowledge of languages and development tools, seeking a
position in a growth-oriented company where I can use my skills to the advantage of the
company while having the scope to develop my own skills.</p>
          <div className='home-social-icons'>
          <Link to={'https://www.linkedin.com/in/katta-venkata-rama-satyanarayana-b5116224a/'} target='blank'><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'#'} target='blank'><i className="fa-brands fa-square-instagram"></i></Link>
          <Link to={'#'} target='blank'><i className="fa-brands fa-square-facebook"></i></Link>
          <Link to={'#'} target='blank'><i className="fa-brands fa-square-github"></i></Link>
          </div>
          <button className='know-more-btn'><Link to={'#'} className='text-decoration-none text-white'>Know More</Link></button>
        </div>
        <div className='home-pic-container'>
          <img src={HomePic} alt='pic' width='100%'/>
        </div>
      </div>
    </div>
  )
}
