import React from 'react'
import './footer.styles.css'
import {ReactComponent as TwitterLogo} from '../../assets/icons8-twitter.svg'
import {ReactComponent as InstagramLogo} from '../../assets/icons8-instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="copyright">
        <h4>Copyright &copy; 2022 All Rights Reserved by Nabil Haouam</h4>
      </div>
      <ul className="social-icons">
            <li><a className="instagram" href="https://www.instagram.com/nabil.hm.908/"><InstagramLogo/></a></li>
            <li><a className="twitter" href="https://twitter.com/nabil_haouam"><TwitterLogo/></a></li>  
      </ul>    
    </div>
  )
}

export default Footer