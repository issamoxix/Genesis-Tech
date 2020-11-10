import React from 'react';
import { Services } from '../data/Home';
import "./ActTwo.css";
import './ActTwo_mob.css';
import Cards from './Cards'
function ActTwo(){
    return (
        <div className="Services-container">
           <div className="Services-title">
               <h1> {Services.title} </h1>
           </div>
           <div className="Services-body">
                <Cards />
           </div>
        </div>
    )
}
export default ActTwo;