// Contact Us Page
import React from 'react';
import "./ActThree.css"

function ActThree(){
    return (
        <div className="contact-container">
            <div className="hands">
                <div className="contact-body">
                    <h1>Contact Nous</h1>
                    <div className="contact-form" >
                        
                        <input type="text" placeholder="Nome et Prenom" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Suject" required />
                        <textarea rows="12" cols="10"></textarea>
                        <input type="submit" value="Send" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ActThree