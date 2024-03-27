import {Link} from 'react-scroll'
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from '../assets/nikhil_logo.png'
import contactimg from '../assets/contact.png'
import menu from '../assets/menu.png'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar(){

  const[shownemu , setshowmenu] = useState(false);
  
  return(
    <nav className="navbar">
      <img src={logo} className='logo' />
      <div className="desktopmenu">
        <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} className="desktopmenuitems" duration={700} >Home</Link>
        <Link activeClass='active'  to='skill' spy={true} smooth={true} offset={-100} className="desktopmenuitems" duration={500}>About</Link>
        <Link activeClass='active'  to='works' spy={true} smooth={true} offset={-100} className="desktopmenuitems" duration={500}>Projects</Link>
        <Link activeClass='active'  to='client' spy={true} smooth={true} offset={-100} className="desktopmenuitems" duration={500}>Clients</Link>
        

      </div>
      <button className='desktopmenubtn'onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactimg} className='desktopmenuimg'/> contact me
      </button>

      <img src={menu} className='mobmenu' onClick={()=>setshowmenu(!shownemu)} />
      <div className="mobilemenu" style={{ display: shownemu ? "flex" : "none" }}>
        <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} className="listitems" duration={700}  onClick={()=>setshowmenu(!shownemu)} >Home</Link>
        <Link activeClass='active'  to='skill' spy={true} smooth={true} offset={-100} className="listitems" duration={500} onClick={()=>setshowmenu(!shownemu)} >About</Link>
        <Link activeClass='active'  to='works' spy={true} smooth={true} offset={-100} className="listitems" duration={500} onClick={()=>setshowmenu(!shownemu)} >Projects</Link>
        <Link activeClass='active'  to='client' spy={true} smooth={true} offset={-100} className="listitems" duration={500} onClick={()=>setshowmenu(!shownemu)} >Clients</Link>
        <Link activeClass='active'  to='contact' spy={true} smooth={true} offset={-100} className="listitems" duration={500} onClick={()=>setshowmenu(!shownemu)} >contact</Link>
      </div>
        
    </nav>
  )
}