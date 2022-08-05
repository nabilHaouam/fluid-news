import React from 'react'
import {ReactComponent as ReactLogo} from '../../logo.svg';
import { Link } from 'react-router-dom';
import './header.styles.css'

const Header = () => {
  return (
    <div className='header'>
       <Link to='/'><ReactLogo/></Link>
       <div className="nav-links">
            <Link to='/'><h3 className='link'>Home</h3></Link>
            <Link to='/news'><h3 className='link'>News</h3></Link>       
       </div>
    </div>
  )
}

export default Header