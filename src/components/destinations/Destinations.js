import React from 'react'
import './DestinationsStyles.css'

import entrance from '../../assets/entrance.jpg'
import frontphoto from '../../assets/frontphoto.jpg'
import churchkeys from '../../assets/churchkeys.jpg'
import mexicancelebration from '../../assets/mexicancelebration.jpg'
import dinnertable from '../../assets/dinnertable.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Tu hogar para tus eventos</h1>
                <p>La Union, Carr Apan - La Unión, 90114 Tlaxco, Tlax., Mexico</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={entrance} alt="/"/>
                    <img src={frontphoto} alt="/"/>
                    <img src={churchkeys} alt="/"/>
                    <img src={mexicancelebration} alt="/"/>
                    <img src={dinnertable} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
