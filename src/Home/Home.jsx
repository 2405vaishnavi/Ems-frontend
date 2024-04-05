import React from 'react';
import './Home.css';
import girl from '../assets/girl.png'; 
import about from '../assets/about-us.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png';
import contact from '../assets/contact.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <>
    <div className='container-h1'id="home" >
        {/* left */}
      <div className='girl-img'>
        <img src={girl} alt='Girl' /> {/* Image inside the .girl-img div */}
      </div>
        {/* right */}
        <div className='content'>
          <div className='content-h1'>
            <img className='right-hand' src='https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/right-hand.svg' alt='right-hand'></img>
            <p className='p1'>Welcome To Collerbra</p>
          </div>
          <p className='p2'><span>Powerful Employee Management System</span><br/>
            <p className='p2-mid'>Unlock the full potential of your workforce with our state-of-the-art employee management system. Backed by a team of over 100 seasoned software engineers, each boasting more than a decade of expertise, we guarantee unparalleled product delivery. Witness our proven track record firsthand. Our team consistently delivers superior products, driven by innovation and excellence. With our employee management system, streamline your HR processes, optimize workforce productivity, and elevate your business to new heights. Embrace reliability and efficiency with our tailored solutions. Let's propel your business forward together!</p>
          </p>
        </div>
    </div>
    <div className='about-us' id="about">
        <div className='about-left'>
            <div className='about-left1'>
                <div className='about-left11'>
                    <img className='about-img' src='https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/right-hand.svg' alt='right-hand'></img>
                    <p className='p1-about'>About us</p>
                </div>
                <p className='p2-about'><span>We Want to Give You The Best Services</span>
                    <p className='p2-mid'>We are 100+ professional software engineers with more than 10 years of experience in delivering superior products Believe it because you've seen it. Here are real numbers</p>
                </p>
            </div>
            <div className='about-left2'>
                <p className='p2-left'><span>24<br/></span>
                <h1>Year Experience</h1>
                </p>
                <ul>
                    <li>IT Service</li>
                    <li>Digital Service</li>
                    <li>Products Engineer</li>
                    <li>Management Service</li>
                </ul>
            </div>
        </div>
        <div className='right'>
            <img src={about} alt='about'/>
        </div>
    </div>
    <div className='service' id="services">
        <div className='dept-top'>
            <dept className='dept-top1'>
            <img className='dept-img' src='https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/right-hand.svg' alt='right-hand'></img>
            <p className='service-p1'>Our Best Services</p>
            </dept>
            <div  className='dept-top2'>
           <p>We are dedicated to providing the best services to our customers, ensuring their satisfaction and exceeding their expectation</p>
           </div>
        </div>
        <div className='service-bottom'>
            <div className='cart'>
            <img src={service1} alt='service'></img>
                <h2>Planning & Strategy</h2>
                <p>Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.</p>
            </div>
            <div className='cart'>
            <img src={service2} alt='service'></img>
                <h2>Design & Development</h2>
                <p>Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.</p>
            </div>
            <div className='cart'>
                <img src={service3} alt='service'></img>
                <h2>Content Marketing</h2>
                <p>Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.</p>
            </div>
        </div>
    </div>
    <div className='dept' id="department">
        <div className='dept-top'>
           <div className='dept-top1'>
           <img className='dept-img' src='https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/right-hand.svg' alt='right-hand'></img>
            <p className=''>Know About Department</p>
           </div>
           <div  className='dept-top2'>
           <p>Knowledge fuels efficiency, understanding your department unlocks its power</p>
           </div>
        </div>
        <div className='dept-bottom'>
            <div className='dept-bottom1'>
                <div className='dept-bottom11'>
                <img src={service2} alt='service'></img>
                </div>
                <div className='dept-last1'>
                <h1>HR Department</h1>
                <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. Inceptos purus nisi taciti</p>
            </div>
            </div>
            <div className='dept-bottom1'>
                <div className='dept-bottom11'>
                <img src={service2} alt='service'></img>
                </div>
                <div className='dept-last1'>
                <h1>IT Department</h1>
                <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. Inceptos purus nisi taciti</p>
            </div>
            </div>
            <div className='dept-bottom1'>
                <div className='dept-bottom11'>
                <img src={service2} alt='service'></img>
                </div>
                <div className='dept-last1'>
                <h1>Service Department</h1>
                <p>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. Inceptos purus nisi taciti</p>
            </div>
            </div> 
        </div>
    </div>
    <div className='footer' id="contact">
        <div className='contact'>
            <div className='contact-left'>
                <img className = 'contact-img' src={contact} alt='contact'></img>
            </div>
            <div className='contact-right'>
                <h1>Welcome to Our Collebra!</h1>
                <p>We are 100+ professional software engineers with mor the 10 years in delive ring super products it because you've seen it.</p>
                <Link to=''><span>Visit my Contact Page</span></Link>
            </div>
        </div>
        <div className='footer-main'>
            <div className='f1'>
                <div className='f11'>
                <img className='footer-img' src={logo} alt='logo'/>
                <h1>Collebra</h1>
                </div>
                <div className='f12'>
                    <p>Improve efficiency <br/>Provide a better employee <br/>management service<br/> with modern technology</p>
                </div>
            </div>
            <div className='f2'>
            <div className='f21'>
                <ul>
                    <li className='f22'>Resources</li>
                    <li>Career</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className='f21'>
                <ul>
                    <li className='f22'>Company</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Our Story</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='f21'>
                <ul>
                    <li className='f22'>Help Pages</li>
                    <li>Customer</li>
                    <li>Developers</li>
                    <li>Our Story</li>
                    <li>About Us</li>
                </ul>
            </div>
            </div>
        </div>
        <div className='foot-last'>
        Copyright © 2023, All Rights Reserved
        </div>
    </div>
    </>
  );
}
