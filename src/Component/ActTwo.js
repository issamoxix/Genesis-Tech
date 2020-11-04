import React from 'react';
import "./ActTwo.css"
import Cards from './Cards'
function ActTwo(){
    return (
        <div className="Services-container">
            <section className="service-desc">
                <div className="desc-header">
                    <img src="./pic/sv.png" width="100%" alt="Services" />
                    
                </div>
                <div className="desc-body">
                    <h1>Notre Services </h1>
                    <p>Sit qui mollit magna commodo consequat exercitation reprehenderit eiusmod quis id eu amet. Aliqua est fugiat commodo anim. Sint mollit dolore consequat magna et mollit laboris dolor ad. Nisi Lorem in elit elit aute nisi labore adipisicing qui consectetur consectetur. Non incididunt ut nisi eu. Ut laboris enim excepteur esse minim. Reprehenderit reprehenderit magna aute ut laboris proident labore in enim ullamco fugiat laborum aliqua.
                    </p>
                </div>
            </section>
            <section className="service-cards">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </section>
        </div>
    )
}
export default ActTwo;