import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";


export default function Footer(){
  return(
    <div className='footer'>
      <div className='icons' >
        <a href="https://www.linkedin.com/in/nikhil-gupta-53092023b/" >
        <FaLinkedin style={{marginTop:'50px', color:'white'}}/>
        </a>
        <a href="https://github.com/Nikhilgupta8085">
        <FaGithub style={{marginTop:'50px', color:'white'}}/>
        </a>
        <a  href="https://wa.me/8085886381">
        <FaWhatsappSquare style={{marginTop:'50px', color:'white'}}/>
        </a>
        <a href="tel:8085886381">
        <IoCallOutline style={{marginTop:'50px', color:'white'}}/>
        </a>
      </div><br/>
    
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'10px'}}> Copyright &#169; 2024 Nikhil Gupta, All right reserved.</p>
    
    </div>
  )
}