import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' className='title'>Gentirt</Link>

        <div className='links'>
           <Link to='/Blog'>Blog</Link>
           <Link to='/Product'>Product</Link>
           <Link to='/About'>About Us</Link>
        </div>

    </div>
  )
}

export default Nav