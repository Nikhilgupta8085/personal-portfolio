/* eslint-disable react/no-unescaped-entities */
import './Skill.css'
import react from '../assets/react.png'
import mongodb from '../assets/mongo-db.png'
import js from '../assets/javascript.png'
import nodejs from '../assets/nodejs.png'

export default function Skill(){
  return(
    
    <section data-aos="flip-left"  id='skill' className='skill'>
      <span className='skilltitle'>What I do</span>
      <span className="skilldesc">I'm skilled and passionate to fullstack development with experience in making user friendly websites my task to make the fullstack website with the help of MERN  </span>
      <div className='skillbars'>
        
        <div className='skillbar'>
          <img src={react} width={600} height={600}  className='skillbarimg'></img>
          <div className='skillbartext'>
            <h2>REACT</h2>
            <p>It is use to make the user friendly interface</p>
          </div>
        </div>

        <div className='skillbar'>
          <img  src={mongodb} className='skillbarimg'></img>
          <div className='skillbartext'>
            <h2>MONGODB</h2>
            <p>It is use to make the database for the application</p>
          </div>
        </div>

        <div className='skillbar'>
          <img src={js} className='skillbarimg'></img>
          <div className='skillbartext'>
            <h2>EXPRESSJS</h2>
            <p>It Help for making the server of the backend</p>
          </div>
        </div>

        <div className='skillbar'>
          <img src={nodejs} className='skillbarimg'></img>
          <div className='skillbartext'>
            <h2>NODEJS</h2>
            <p>It's a tool on which all the liberary runs</p>
          </div>
        </div>

        
      </div>
    </section>
  )
}