import React from 'react'
import "../styles/Banner.scss"
import Window from '../assets/img/hero-image.png'


const Banner = () => {
    return (
        <div className='banner-wrap'>

            <div className='banner'>
                <div className='title-content'>
                    <div className='circle' />
                    <p className='h1'>Discover
                        Most Suitable
                        Property</p>
                    <p className='text-title'>Find a variety of properties that suit you very easilty
                        Forget all difficulties in finding a residence for you</p>
                    <div className='search-bar'>
                        <i className="fa-solid fa-location-dot"></i>

                        <input type="search" />
                        <div className='search'>
                            <button >Search</button>
                        </div>

                    </div>

                    <div className='quantity'>
                        <div className='quantity-item'>
                            <div className='quantity-number'>9,000 <p>+</p>
                            </div>
                            <div className='quantity-title'>Premium Product</div>
                        </div>
                        <div className='quantity-item'>
                            <div className='quantity-number'>2,000 <p>+</p>
                            </div>
                            <div className='quantity-title'>Happy Customer</div>
                        </div>
                        <div className='quantity-item'>
                            <div className='quantity-number'>28 <p>+</p>
                            </div>
                            <div className='quantity-title'>Awards Winning</div>
                        </div>

                    </div>


                </div>
                <div className='window'>
                    <img src={Window} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner