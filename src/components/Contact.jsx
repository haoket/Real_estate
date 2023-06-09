import React from 'react'
import Contacts from '../assets/img/contact.jpg'
import '../styles/Contact.scss'
const Contact = () => {
    return (
        <div className='contact-wrap'>
            <div className='contact'>

                <div className='contact-content'>
                    <div className='contact-item1'>
                        <h2>Out Contact Us</h2>
                        <h1>Easy to contact us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quasi commodi.</p>


                    </div>
                    <div className='contact-item2'>
                        <div className='box'>
                            <div className='box-desc'>
                                <i className="fa-solid fa-phone-volume"></i>
                                <div className='box-number'>
                                    <div className='title'>Call</div>
                                    <div className='number'>0396043213</div>
                                </div>
                            </div>
                            <button>Call Now</button>
                        </div>
                        <div className='box'>
                            <div className='box-desc'>
                                <i className="fa-solid fa-phone-volume"></i>
                                <div className='box-number'>
                                    <div className='title'>Call</div>
                                    <div className='number'>0396043213</div>
                                </div>
                            </div>
                            <button>Call Now</button>
                        </div>
                        <div className='box'>
                            <div className='box-desc'>
                                <i className="fa-solid fa-phone-volume"></i>
                                <div className='box-number'>
                                    <div className='title'>Call</div>
                                    <div className='number'>0396043213</div>
                                </div>
                            </div>
                            <button>Call Now</button>
                        </div>
                        <div className='box'>
                            <div className='box-desc'>
                                <i className="fa-solid fa-phone-volume"></i>
                                <div className='box-number'>
                                    <div className='title'>Call</div>
                                    <div className='number'>0396043213</div>
                                </div>
                            </div>
                            <button>Call Now</button>
                        </div>

                    </div>




                </div>
                <img src={Contacts} alt="" />
            </div>
        </div>
    )
}

export default Contact