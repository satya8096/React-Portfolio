import React from 'react'
import ResumePic from '../images/resume.png'
import { Link } from 'react-router-dom';

function MyResume() {
  return (
    <div className='text-center resume-container'>
      <h1 className='text-center pt-4 pb-4'>My Resume</h1>
      <img src={ResumePic} alt='resume' className='resume-pic'/>
      <div>
      <button className='resume-btn bg-success'><Link to={'https://drive.google.com/file/d/1Vj_gh7OlwmRMpbZT1JxaOlX3Yk9sduRD/view?usp=drivesdk'} className='text-black text-decoration-none' target='blank'>Download Resume</Link></button>
      </div>
    </div>
  )
}
export default MyResume;
