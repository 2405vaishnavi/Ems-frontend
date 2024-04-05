import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className='logo' src={logo} alt='logo'/>
          </Link>
        </li>
        <li className='list'>
          <Link to="/">Home</Link>
        </li>
        <li className='list'>
          <a href="#about">About</a>
        </li>
        <li className='list'>
          <a href="#services">Services</a>
        </li>
        <li className='list'>
          <a href="#department">Department</a>
        </li>
        <li className='list'>
          <a href="#contact">Contact</a>
        </li>
        <Link to='/login'>
          <button className='login-btn'>Login</button>
        </Link>
      </ul>
    </nav>
  );
};
