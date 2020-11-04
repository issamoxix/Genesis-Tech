import React from 'react';
import "./ActOne.css";

function ActOne(){
    const scroll_to_services = ()=>{
        const Services_y = document.getElementById('Services')?document.getElementById('Services').getBoundingClientRect().y:false
        if(!Services_y) return false
        window.scrollTo(0,Services_y-5)
    }
    return (
        <div className="container">
            <div className="Description">
                <div className="Desc-container">
                    <h1 className="Title">Genesis Tech</h1>
                    <p>Nous nous spécialisons dans 
                        la création de sites 
                            Web professionnels et personnalisés.</p>
                            <button>En savoir plus</button>
                </div>
            </div>
            <div className="Picture">
                <div className="Pic-container">
                    <img src="./pic/pic1.png" alt="Working ..." />
                </div>
            </div>
            <div className="Arrow-down">
                    <img src="./pic/down-arrow.png" onClick={scroll_to_services} alt="Scroll down !" />
            </div>
        </div>
        )
}
export default ActOne;