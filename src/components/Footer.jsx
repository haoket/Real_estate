import React from 'react'
import '../styles/Footer.scss'
import Logo from '../assets/img/logo2.png'
const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='footer-left'>
                    <img src={Logo} alt="" />
                    <p>Our vision is to make all people
                        the best place to live for them.</p>
                </div>
                <div className='footer-right'>
                    <h1>Information</h1>
                    <p>145 New York, FL 5467, USA</p>
                    <span>Property</span>
                    <span>Services

                    </span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    )
}

export default Footer