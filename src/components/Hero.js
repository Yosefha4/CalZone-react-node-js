import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './Hero.css'
import Goog from './images/Image-2.jpg'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                
                
                <h1>In laboriosam et ipsum praesentium excepturi aut.</h1>
                
                <p>Reiciendis sint cupiditate sit perferendis nostrum adipisci beatae assumenda quidem. Et velit illum laborum explicabo minima esse quos laboriosam quam. Earum et nobis tempora quia.</p>            
            <div className='ccc'>
                <a href="https://play.google.com/store/apps" target="_blank"><button href='/' className='button1'></button></a>
                <a href="https://www.apple.com/app-store//" target="_blank"><button href='/' className='button2'></button></a>
                </div> 
            </div>
        </div>
    )
}

export default Hero
