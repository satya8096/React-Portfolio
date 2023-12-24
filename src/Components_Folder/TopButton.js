import React from 'react'
import { Link } from 'react-router-dom'

export default function TopButton() {
  return (
    <>
    <Link className='top-button text-decoration-none'>Go to Top <i className="fa-solid fa-arrow-up"></i></Link>
    </>
  )
}
