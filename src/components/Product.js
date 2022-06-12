import React from 'react'
import user1 from './images/grey211.jpg'

import './Product.css'

const Product = () => {
    return (
        <div className='Product' id='Product'>
            <div className='container'>
                <h3>The Product</h3>
                <h2>Dolore voluptatum fugit dolorem a.</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Product Name.</span></p>
                        <p>Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.</p>
                        <p><button>Learn More</button></p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Product Name</span></p>
                        <p>Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.</p>   
                        <p><button>Learn More</button></p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Product Name</span></p>
                        <p>Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.</p>
                        <p><button>Learn More</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
