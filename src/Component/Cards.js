import React from 'react';
import "./Cards.css"
import Card from "./Card"
function Cards(){
   const data = "Mollit tempor     minim velit. Occaecat elit irure dolor irure fugiat proident quis est laborum     "
    return (
        <>

         <Card title="Service #1" p={data} />
       <Card title="Service #2" p={data} />
 <Card title="Service #3" p={data} />
 <Card title="Service #4" p={data} />
 <Card title="Service #5" p={data} />
 <Card title="Service #6" p={data} />
        </>
    )
}
export default Cards;