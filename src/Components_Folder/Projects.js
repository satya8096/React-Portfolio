import React, { useState } from 'react';
import ProjectsData from './ProjectsData';
import { Link } from 'react-router-dom';

function Projects() {
  const [Data,setData] = useState(ProjectsData);

  const OptionSelect = (e)=>{
    if(e.target.value==='React'){
      let newdata = Data.filter((each)=>{
        return e.target.value===each.filterItem
      })
      setData(newdata);
    }
    else if(e.target.value==='All'){
      setData(ProjectsData)
    }
    else if(e.target.value==='HtmlCss'){
      let newdata= Data.filter((each)=>{
        const {filterItem} =each;
      return filterItem.endsWith('html');
      })
      setData(newdata)
    }
  }
  
  return (
    <div>
      <div className='project-main-container'>
      <h2 className='text-center pt-5 mt-4 pb-3'>Projects</h2>
        <h5 className='text-center'>Filter By Technology</h5>
        <div className='tech-container'>
        <select className='tech-select' onChange={(e)=>OptionSelect(e)}>
          <option value={'All'}>All</option>
          <option value={'React'}>React</option>
          <option value={'JavaScript'}>JavaScript</option>
          <option value={'HtmlCss'}>Html_Css</option>
          <option value={'Bootstrap5'}>Bootstrap5</option>
        </select>
        </div>
      </div>
      <h5 className='ms-5 mb-4 project-showing'>Showing {Data.length} Projects</h5>
      <hr></hr>
      <div className='cards-container d-flex align-items-center justify-content-evenly gap-5 flex-wrap mt-5 mb-5'>
      {
        Data.map((each,index)=>{
          const {id,imgSrc,live,git,title,tech} = each;
          return(
            <div className='card text-center' key={index}>
              <img src= {imgSrc} alt={title} />
              <span className='share-icon'><i className="fa-solid fa-share"></i></span>
              <div className='d-flex align-items-center justify-content-evenly flex-column gap-3 mt-4 card-text-container'>
              <h5 className='mt-4'>{title}</h5>
              <div className='tech-list'>
                {
                  tech.map((each,index)=>{
                    return <span key={index}>{each.tech}</span>
                  })
                }
              </div>
              </div>
              <div className='btn-container d-flex align-items-center justify-content-evenly mt-2'>
              <button><Link to={live} target='blank' className='text-decoration-none'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></button>
              <button><Link to={`/projects/${id}`} className='text-decoration-none'>View</Link></button>
              <button><Link to={git} target='blank' className='text-decoration-none'>GitHub <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></button>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Projects;