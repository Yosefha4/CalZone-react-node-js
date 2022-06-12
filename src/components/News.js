
import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './News.css'



const News=() =>{


    function sendEmail (e) {
      e.preventDefault();
  
      emailjs.sendForm('CalZone', 'template_sbqhb9e', e.target, '61A9ZY39zaKAsIHPE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };


  return (
    <div>  
       
         <form
    className="news"
    onSubmit={sendEmail}
>
    
    <label>
       Subscribe to our newsletter                  
    </label>

    <div className="fff">
        <input   type="email" name="user_email"  className = "email" placeholder="Enter your email"
        />
        <button
            className="btn"
        >
            Subscribe
        </button>
    </div>

</form></div>
  )
}

export default News