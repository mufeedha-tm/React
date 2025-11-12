import React from 'react'
import './services.css';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <p className='services-subtitle'>Choose one of our services below</p>

            <div className='services-links'>
                {/* web development */}
                <Link to='web-dev' className='service-link web'>
                    Web Development
                </Link>

                {/* App development */}
                <Link to='app-dev' className='service-link app'>
                    App Development
                </Link>

            </div>
           {/* nested route content */}
            <Outlet/>  
        </div>
    )
}


export default Services
