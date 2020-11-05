import React from 'react';
const Card =(props)=>{
    return (
        <div className="Card">
            <div>
                <h1 className="Card-title">{props.title}</h1>
            </div>
            <div className="Card-body">
                <p>{props.p}</p>
            </div>
         </div>
    )
}
export default Card