// Contact Us Page
import React from 'react';
import "./ActThree.css"

function ActThree(){
    return (
        <div className="contact-container">
            
            <div className="contact-body">
                <h1>Contact us </h1>
                <p>Contact us with your idea or project 
let’s work togheter !</p>
            </div>
            <form>
            <div className="contact-form">
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required/>
                <textarea placeholder="Your Message" cols="20" rows="10" ></textarea>
                <button>Submit
          
                </button>
            </div>
            </form>
        </div>
    )
}
export default ActThree