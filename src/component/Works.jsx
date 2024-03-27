import "./Works.css"
import img1 from '../assets/travel_website.png'
import img2 from '../assets/ecommerce-website.png'
import img3 from '../assets/fashion-website.png'

export default function Works(){
  return(
    <section   id='works'>
      <div data-aos="flip-left">
      <h2 className='worktitle'>My Projects</h2>
      <span className='workdesc'>I take a pride in paying the attention to the smallest details and making sure thet my work is pixel perfect. i am excited to bring m skills and experience to help buisnesses achieve their goals and create a strong online presence</span>
      </div>
      <div className='workimgs'>
        <div data-aos="fade-right" data-aos-delay="200" className="imgdiv">
          <img src={img1}  className='workimg'></img>
          <button className="button">
          <a href="https://travel-website-tw.netlify.app/" >
        Click Here
          </a>
          </button>
        </div>
        <div data-aos="fade-left"  data-aos-delay="300"  className="imgdiv">
          <img src={img2}  className='workimg'></img>
          <button className="button">
          <a href="https://github.com/Nikhilgupta8085/ecommerce-website/tree/master" >
          Click Here
          </a >
          
          </button>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" className="imgdiv">
          <img src={img3}  className='workimg'></img>
          <button className="button">
          <a href="https://nikhilgupta8085.github.io/shopping-website/merlin.html" >
            Click Here
          </a >
          </button>
        </div>
        </div>
      
    </section>
  )
}