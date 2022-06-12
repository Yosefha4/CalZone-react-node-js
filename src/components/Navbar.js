import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import calLogo from './images/Group-95.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={calLogo} alt='logo' />
                </a>
                <div className='hum' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> 
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={1} duration={500} onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Product" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>The Product</Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to="demo" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Pricing</Link>
                    </li>
                    <li className='nav-ir'> 
                        <Link to="demo" >SignUp</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
