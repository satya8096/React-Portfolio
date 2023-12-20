import React from 'react';
import Aditya from '../images/Aditya_College_of_Engineering_1.jpeg';
import Srinivasa from '../images/srinivasa.jpeg';
import School from '../images/school.jpg';
import certiData from './CertificatesData'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className='about-main-container text-center pt-1 pb-4'>
      <h2 className='pb-2 pt-4' ><i>Hai,Folks!</i></h2>
      <h4 className='pb-3 pt-2'>I'm Satyanarayana</h4>
      <p className='about-content m-auto'>I am from Konaseema District. Currently pursuing B.Tech final year in the stream of Mechanical Engineering. Along with my B.tech I have completed the foundations of the <i>HTML5 , CSS3 , JavaScript , React Js , Bootstrap5 , MySQL , Git , GitHub , Basics of python , AWS , DevOps</i>. I have completed some certifications for these courses. My strengths are Self motivated , Hard & Smart Worker , Quick Learner. My Short term goal is to get a job in the reputed company and my long term goal is to achieve a higher position where i can build my career and help the organization. I bileave to learn from past mistakes and experiances.</p>
      <h5 className='pb-3 pt-3 thank-you'>Thank You!</h5>
      <h4 className='name'>k Satyanarayana</h4>
      </div>
      <div>
        <h2 className='text-center pt-5'>Education Details</h2>
        <div className='education-main-container d-flex align-items-center justify-content-around flex-wrap gap-2'>
        <div className='edu-btech text-center'>
          <img src={Aditya} alt='aditya'/>
          <h5>Aditya College Of Engineering</h5> <span>2021 - 2024</span>
          <h5>B.Tech</h5>
          <p>Mechanical Engineering</p>
          <p>CGPA - 8.01</p>
          <p>Surampalem , Andhra Pradesh</p>
        </div>
        <div className='edu-diploma text-center'>
        <img src={Srinivasa} alt='aditya' />
          <h5>Srinivasa Institute Of Engineering & Technology</h5> <span>2018 - 2021</span>
          <h5>Diploma</h5>
          <p>Mechanical Engineering</p>
          <p>Percentage - 81.57%</p>
          <p>Cheyyeru , Andhra Pradesh</p>
        </div>
        <div className='edu-ssc text-center'>
        <img src={School} alt='aditya'/>
          <h5>Z P P High School</h5> <span>2017 - 2018</span>
          <h5>SSC</h5>
          <p>CGPA - 9.2</p>
          <p>P. Lakshmiwada , Andhra Pradesh</p>
        </div>
        </div>
      </div>
      <div className='certificates-main-container'>
        <h2 className='text-center pt-3 pb-2'>Certificates</h2>
        <h5 className='ms-3 certificates-showing'>Showing {certiData.length} Certificates</h5>
        <hr className='text-success'/>
        <div className='certifiacates-container d-flex align-items-center justify-content-around flex-wrap gap-3'>
            {
              certiData.map((each,index)=>{
                const {imgSrc,title} = each;
                return <div className='certificate-card text-center' key={index}>
                  <img src={imgSrc} alt='html' width={'100%'}/>
                  <h4 className='pt-2'>{title}</h4>
                </div>
              })
            }
        </div>
        <div className='achivement-main-contaoner'>
          <h2 className='text-center pt-4'>Achievements</h2>
          <div className='achivement-container gap-3'>
            <div className='achieve-card'>
            <h5 className='text-primary'>Greeks For Greeks</h5> 
              <p>Completed +110 codes in Greeks For Greeks</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://auth.geeksforgeeks.org/user/kattavenkataramasatyanarayana'} target='blank'>Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>Leetcode </h5>
              <p>Completed +20 codes in Leetcode</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://leetcode.com/satyanarayana8096/'} target='blank' >Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>Codecheff  </h5>
              <p>Completed +180 codes in CodeCheff</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://www.codechef.com/users/satyanarayana8'} target='blank'>Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>Hackerrank </h5>
              <p>Completed SQL 3 Star badge in Hackerrank</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://www.hackerrank.com/profile/kattasatyanaray1'} target='blank'>Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>SQL Badge </h5> 
              <p>Completed 3 Star Badge in Hackerrank</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://www.hackerrank.com/profile/kattasatyanaray1'} target='blank'>Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>Cyber Security Badge  </h5>
              <p>Completed Cyber Security Badge by Cisco Networking Academy</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://www.credly.com/badges/abb52ae8-dc1f-40d9-80f9-120fc68d7647/public_url'} target='blank'>Click Here</Link></button>
            </div>
            <div className='achieve-card'>
            <h5 className='text-primary'>AWS Academy  </h5>
              <p>Completed AWS Academy Cloud Foundations Badge by AWS Academy</p>
              <button className='ps-2 pe-2 border-0 outline-0 bg-success rounded'><Link className='text-decoration-none text-black' to={'https://www.credly.com/badges/e112650f-2f32-4359-a750-b2adf2f0fcdc/public_url'} target='blank'>Click Here</Link></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
