import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Logo from '../assets/img/logo.png'

const Navbar = () => {
    const [isExpand, setIsExpand] = useState(false);


    return (


        < div className='header-wrap' >
            <div className={`nav ${isExpand && 'active'}`}>
                <img src={Logo} alt="" />
                <div className='menu'>
                    <a>Residencies </a>
                    <a>Our value </a>
                    <a>Contact Us </a>
                    <a>Get Started </a>
                    <button> Contact</button>
                </div>
                <div className='bar-mobile' onClick={() => setIsExpand(!isExpand)}>
                    {!isExpand ? <i className="fa-sharp fa-solid fa-bars-staggered"></i> : <i className="fa-solid fa-x"></i>}
                </div>





            </div>

        </div >

    )
}

export default Navbar