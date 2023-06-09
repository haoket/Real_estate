import React from 'react'
import '../styles/Value.scss'
import Values from '../assets/img/value.png'
const Value = () => {
    return (
        <div className='value-wrap'>
            <div className='value'>
                <img src={Values} alt="" />
                <div className='value-content'>
                    <div className='value-item1'>
                        <h2>Out Value</h2>
                        <h1>Value We Give to You</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quasi commodi.</p>


                    </div>
                    <div className='value-item2'>
                        <div className='item-title'>
                            <i className="fa-solid fa-shield-halved"></i>
                            <h3>Best interest rates on the market</h3>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className='item-desc'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore facilis itaque nam eius vitae quis excepturi, dolor at sit!</p>
                        </div>

                    </div>
                    <div className='value-item2'>
                        <div className='item-title'>
                            <i className="fa-solid fa-shield-halved"></i>
                            <h3>Prevent unstable prices</h3>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>

                    <div className='value-item2'>
                        <div className='item-title'>
                            <i className="fa-solid fa-shield-halved"></i>
                            <h3>Best price on the market</h3>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Value