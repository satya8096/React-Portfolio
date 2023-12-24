import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
      <div className="mt-5 contactmeBack">
        <div>
            <h1 className="text-center p-5 contactme-heading" >Contact Me</h1>
        </div>
        <div className="d-flex contactcontent align-items-center justify-content-around gap-5 pb-5">
            <div className="conatct-details-box contactbox">
                <p className="number text-dark"><i className="fa-solid fa-phone"></i> <Link to={"callto:+918096334401"}> +918096334401</Link> <span className="copyn"></span></p>
                <p className="email text-dark"><i className="fa-solid fa-envelope"></i><Link to={"mailto:kattasatyanarayana2003@gmail.com"}> kattasatyanarayana2003@gmail.com </Link><span className="copye"></span></p>
                <p className="web text-dark"><i className="fa-solid fa-earth-americas"></i><Link to={'https://kattasatyanarayana.netlify.app/'} target='blank'>satyanarayanakatta.netlify.app</Link> <span className="copyw"></span></p>
                <p className="address text-dark"><i className="fa-solid fa-building-columns"></i> konaseema, Andhra Pradesh, India <span className="copya"></span></p>
            </div>
        </div>
    </div>
  )
}
