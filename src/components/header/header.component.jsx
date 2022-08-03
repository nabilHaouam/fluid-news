import React from 'react'
import {ReactComponent as ReactLogo} from '../../logo.svg';
import { Link } from 'react-router-dom';
import './header.styles.css'
const Header = () => {
  return (
    <div className='header'>
       <ReactLogo/>
       <div className="nav-links">
            <Link to='/'><h3 className='link'>Home</h3></Link>
            <Link to='/news'><h3 className='link'>News</h3></Link>
            <h3 className='link'>Contact</h3>
       </div>
    </div>
  )
}

export default Header