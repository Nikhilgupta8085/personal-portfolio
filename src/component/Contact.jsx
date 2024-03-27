/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './Contactpage.css';
import React, { useRef,useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import linkdin from '../assets/linkedin.png'
import github from '../assets/github-logo.png'
import whatsapp from '../assets/whatsapp.png'
import calling from '../assets/calling-app.png'
import {toast} from 'react-hot-toast'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Contact(){

  const [yourname,setYourName] =useState("");
  const [youremail,setYourEmail]=useState("");
  const [message,setMessage]=useState("");

  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])


  const form = useRef("");

  const sendEmail = (event) => {
    console.log("Email send");
    event.preventDefault();
    setYourName("");
    setYourEmail("");
    setMessage("");

    emailjs.sendForm('service_gea7eq5', 'template_cagpezq', form.current,{ publicKey: 'hDQCCQ4SptosvYP6E'})
      .then((result) => {
        
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return(
    <section id='contact' className='contactpage'>
      

       {/* ref={form} */}
      {/* onClick={sendEmail} */}
      <div data-aos="fade-right" data-aos-delay="300" className='contact' style={{height:'500px'}}>
        <h1 className='clientpagetitile' >Contact Me</h1>
        <span className='contactdes'>Please Fill out the form below to discuse any work apportunities.</span>
        <form id='contactmob' className='contactform' 
         onSubmit={sendEmail}
         ref={form}
          >
          <input  type='text' name="from_name" className='name' placeholder='Your name' value={yourname} onChange={(e)=>setYourName(e.target.value)} />
          <input  type='email' name="from_email" className='email' placeholder='Your Email' value={youremail} onChange={(e)=>setYourEmail(e.target.value)} />
          <textarea  name="message" rows='5' className='msg' placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
          <button  type='submit' value="Send" className='button'style={{cursor:'pointer'}} >Submit</button>
        </form>
      </div>

      
      
    </section>
  )
}