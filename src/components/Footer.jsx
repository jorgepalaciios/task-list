import '../App.css'
import { FaFreeCodeCamp } from "react-icons/fa6";



const Footer = () => (
  <>
  <div className='footer-container'>
      <span>Developed by: </span>
      
      <a href="https://japc-dev-portfolio.web.app/"><strong>Jorge Palacios</strong></a>
    </div>
    <div className='freecodecamp'>
      <span>Special thanks to </span>
      <FaFreeCodeCamp className='freecodecamp-logo'/>
      <a href="https://freecodecamp.org"> <strong>FreeCodeCamp.org</strong> </a>
    </div>
  </>
  )

export default Footer