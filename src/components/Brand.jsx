import React from 'react'
import '../styles/Brand.scss'
import Brand1 from '../assets/img/prologis.png'
import Brand2 from '../assets/img/equinix.png'
import Brand3 from '../assets/img/realty.png'
import Brand4 from '../assets/img/tower.png'
const Brand = () => {
    return (
        <div className='Brand-wrap'>
            <div className='brand'>
                <img src={Brand1} alt="" />
                <img src={Brand2} alt="" />
                <img src={Brand3} alt="" />
                <img src={Brand4} alt="" />

            </div>
        </div>
    )
}

export default Brand