import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/newlogo.jpg'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notif from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu} alt="menu"/>
            <Link to='/'><img className='logo' src={logo} alt="logo"/></Link>
        </div>

            <div className='nav-middle flex-div'>
                <div className='search flex-div'>
                <input type="text" placeholder='Search'/>
                <img src={search} alt="search"/>
                </div>
            </div>

            <div className='nav-right flex div'>
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={notif} alt="" />
                <img src={profile} className='user' alt="" />
            </div>
    
    </nav>
  )
}

export default Navbar