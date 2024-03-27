/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './component/Navbar'
import Intro from './component/Intro'
import Skill from './component/Skill'
import Works from './component/Works'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Client from './component/Client'

export default function App() {
  return (
    <div>
      <Navbar/>
      
      <Intro/>
      <Skill/>
      
      <Works/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  )
}