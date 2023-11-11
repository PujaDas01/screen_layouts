import React from 'react';
import { Link } from 'react-router-dom';
import { BiFullscreen } from 'react-icons/bi';
import '../navbar/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navWrapper'>
        <div className='logoContainer'>
          <Link to='/'>
            <BiFullscreen/>
          </Link>
        </div>
        <div className='navbarLink'>
          <Link to='/'>Sign Up</Link>
          <Link to='/calculator'>Calculator</Link>
          <Link to='/dreamHome'>Dream Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;