import React from 'react'
import Data from './ProjectsData';
import { Link, useParams } from 'react-router-dom';

export default function ProjectView() {
    const param = useParams();
    const project = Data.filter((each)=>{
      return each.id===param.id
  })
  return (
    <div className='project-view-main-container'>
      <Link to={'/projects'} className='back-to-project-btn'><i className="fa-solid fa-angles-left"></i> Back To Projects</Link>
      {
        project.map((each)=>{
            const {id,title,images,live,git,imgSrc,tech} = each;
            return(
                <div key={id} className='project-view-container'>
                  <h3 className='text-center mt-3'>Project Details</h3>
                  <div className='project-view-container-sub mt-4 d-flex align-items-center justify-content-around'>
                  <div className='project-view-container-sub-img'>
                    <img src={imgSrc} alt={title}/>
                  </div>
                  <div className='project-content-links'>
                    <p><span className='fw-bold'>Project Title : </span><span>{title}</span> </p>
                    <p><span className='fw-bold'>Project Id : </span><span>{id}</span></p>
                    <p><span className='fw-bold'>Project Live:   </span><Link to={live} target='blank'className='text-decoration-none'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
                    <p><span className='fw-bold'>GitHub Source Code:  </span><Link to={git} target='blank' className='text-decoration-none'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
                    <p><span className='fw-bold'>Creater: </span>Satyanarayana katta</p>
                    <span className='fw-bold mb-3'>Technologies Used : </span>
                    <p className='project-view-tech-list d-flex align-items-center justify-content-start gap-2 flex-wrap'>
                      {
                        tech.map((each,index)=>{
                          return <span key={index}>{each.tech}</span>
                        })
                      }
                    </p>
                  </div>
                  </div>
                    <h4 className='text-center'>Project Description</h4>
                    <p className=' m-auto p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nibh ac lectus iaculis posuere. Maecenas non est viverra, efficitur enim sit amet, porttitor turpis. In tincidunt, nisl quis viverra elementum, turpis nisi scelerisque augue, id tincidunt ex libero vel eros. Nulla eget dui quis leo bibendum cursus. Quisque vel mi sit amet metus tincidunt vulputate vel non ante. Phasellus tempor venenatis justo, sed sagittis erat malesuada ut. Sed tincidunt malesuada dolor, sit amet fringilla sem. Suspendisse dapibus purus nunc. Duis bibendum tellus nec mi ultrices, a vehicula lorem auctor. Aliquam arcu purus, lacinia ac tortor at, efficitur porttitor purus. Donec pellentesque ultricies varius. Sed ultricies nisi et ipsum varius vestibulum. Maecenas a odio ligula. Morbi accumsan placerat ex at sodales. Nunc vel pellentesque felis, vel sodales ante.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris fermentum tortor ut volutpat aliquam. Mauris ut lectus porttitor, porta mi vitae, faucibus dolor. Duis quis auctor nisl. Nullam at ex non erat fringilla mollis et eu neque. Fusce ante eros, tincidunt ornare lorem eget, sollicitudin laoreet lorem. Sed lacinia ut augue ut tincidunt. Morbi at congue mauris, vitae commodo diam. Proin ut libero vel urna euismod aliquet.</p>
                    <h4 className='mt-3 mb-2 pb-3 pt-2 text-center'>Project Preview Images</h4>
                    <div className='images-container'>
                    {
                      images.map((each,index)=>{
                        return(
                          <img src={each.img}  alt='ncd' key={index}/>
                        )
                      })
                    }
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}


