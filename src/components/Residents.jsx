import React from 'react'
import '../styles/Residents.scss'

import Item from '../assets/img/r2.png'

const Residents = () => {
    return (
        <div className='resident-wrap'>
            <div className='resident'>
                <div className='title-content'>
                    <h2>Best Choices</h2>
                    <div className='title-slide'>
                        <h1>Popular Residents</h1>
                        <div className='button-slide'>
                            <i className="fa-solid fa-chevron-left"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>


                <div className='slide'>
                    <div className='slide-item'>
                        <img src={Item} alt="" />
                        <p>$66,343</p>
                        <h2>Asatti Garden City</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium</p>
                    </div>
                    <div className='slide-item'>
                        <img src={Item} alt="" />
                        <p>$66,343</p>
                        <h2>Asatti Garden City</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium</p>
                    </div>
                    <div className='slide-item'>
                        <img src={Item} alt="" />
                        <p>$66,343</p>
                        <h2>Asatti Garden City</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium</p>
                    </div>
                    <div className='slide-item'>
                        <img src={Item} alt="" />
                        <p>$66,343</p>
                        <h2>Asatti Garden City</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Residents