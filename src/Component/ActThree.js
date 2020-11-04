// Contact Us Page
import React from 'react';
import "./ActThree.css"

function ActThree(){
    return (
        <div className="contact-container">
            <div className="img">
                
            </div>
            <div className="contact-body">
                <h1>Contact Nous </h1>
                <form className="contact-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject " />
                    <textarea cols="30" rows="15"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}
export default ActThree