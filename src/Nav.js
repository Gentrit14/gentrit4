import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

import { AiFillTwitch } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";
import ProductsMegamenu from './ProductsMegamenu';

const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' className='title'><AiFillTwitch />Twitch</Link>

        <div className='links'>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Products <GoChevronDown /></Link>  
              <ProductsMegamenu />  
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Blog </Link>    
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>About </Link>    
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Contact </Link>    
           </div>
        </div>

        <div className='auth'>
            <Link to='/' className='login'>Log In</Link>
            <Link to='/' className='signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Nav