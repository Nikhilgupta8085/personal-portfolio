/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import bg from '../assets/Nikhil_profile (2).png';
import { RiPagesLine } from "react-icons/ri";
import {Link} from 'react-scroll';
import './Intro.css';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Intro(){

  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Web Developer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    // Clean up the Typed instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);
  
  return(
    <section data-aos="zoom-out" data-aoa-delay="300" id='intro' className="intro">
      <div className="introcontent">
        <span className='hello'>Hello</span>
        <span className='introtext'> I'm <span className='introname'>Nikhil Gupta </span>  <br/> <span className='role'></span> </span>
        <p className='intropara'> I'm skill web developer and experience in creating <br/> the visually appealing and user friendly websites. </p>
        <div>
        <Link activeClass='active'  to='contact' spy={true} smooth={true} offset={-100}  duration={500}>
        <button className='btn' style={{cursor:'pointer', margin:'10px'}}>HIRE ME</button>
        </Link>
        <a href='https://drive.google.com/file/d/1C40Wmu63RxhOi2JSQ2Y709qReNhDN2S0/view?usp=drive_link'>
          <button className='btn' style={{cursor:'pointer'}}>  <RiPagesLine /> DOWNLOAD CV </button>
        </a>
        </div>
      </div>
      <div className="bg">
        
        <img src={bg} className='bgimg'  ></img>
        
      </div>
    </section>
  )
}