import React from 'react';
import html from '../images/html-5.png';
import css3 from '../images/css-3.png';
import JavaScript from '../images/js.png';
import ReactJs from '../images/science.png';
import Bootstrap5 from '../images/bootstrap.png';
import MySQL from '../images/mysql.png';
import EC2 from '../images/ec2.png';
import Loadbalancer from '../images/loadbalancer.png';
import VPC from '../images/aws-vpc-icon.png';
import S3 from '../images/s3.png';
import IAM from '../images/iam.jpg';
import AutoScaling from '../images/auto scaling.png';
import Python from '../images/python.png';
import OOPs from '../images/programming.png';
import DataStruc from '../images/algorithm.png';
import Jenkins from '../images/jenkins.png';
import Git from '../images/git.png';
import GitHub from '../images/github1.png';
import Kubernuts from '../images/Kubernetes.png';
import Docker from '../images/docker.png';

export default function Skills() {
  return (
    <>
    {/* <h2 className='text-center'>I'm Strong in</h2> */}
    <div className='skills-main-container d-flex align-items-center justify-content-evenly flex-wrap gap-5 text-center'>
      <div className='dummy-div'>
        <h3>Front End Skills</h3>
      <div className='front-end-skills'>
        <span><img src={html} alt='html5' />HTML5</span>
        <span><img src={css3} alt='html5' />CSS3</span>
        <span><img src={JavaScript} alt='html5' />JavaScript</span>
        <span><img src={ReactJs} alt='html5' />ReactJs</span>
        <span><img src={Bootstrap5} alt='html5' />Bootstrap5</span>
        <span><img src={MySQL} alt='html5' />MySQL</span>
      </div>
      </div>
      <div className='dummy-div'>
        <h3>Amazon Web Services(AWS)</h3>
      <div className='front-end-skills'>
        <span><img src={EC2} alt='html5' />EC2</span>
        <span><img src={S3} alt='html5' />S3</span>
        <span><img src={VPC} alt='html5' />VPC</span>
        <span><img src={Loadbalancer} alt='html5' />Loadbalancer</span>
        <span><img src={IAM} alt='html5' />IAM</span>
        <span><img src={AutoScaling} alt='html5' />Auto scaling</span>
      </div>
      </div>
      <div className='dummy-div'>
        <h3>Programming Languages</h3>
      <div className='front-end-skills'>
        <span><img src={Python} alt='html5' />Python</span>
        <span><img src={OOPs} alt='html5' />OOPs</span>
        <span><img src={DataStruc} alt='html5' />Data Structures and Algorithums</span>
      </div>
      </div>
      <div className='dummy-div'>
        <h3>DevOps</h3>
      <div className='front-end-skills'>
        <span><img src={Jenkins} alt='html5' />Jenkins</span>
        <span><img src={Git} alt='html5' />Git</span>
        <span><img src={GitHub} alt='html5' />GitHub</span>
        <span><img src={Docker} alt='html5' />Docker</span>
        <span><img src={Kubernuts} alt='html5' />Kubernuts</span>
      </div>
      </div>
    </div>
    </>
  )
}
