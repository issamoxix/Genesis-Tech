import React , {useState,useEffect} from  'react';
import "./ActOne.css";
import "./ActOne_mob.css";
import {Home} from '../data/Home'
function ActOne(){
    const scroll_to_services = ()=>{
        const Services_y = document.getElementById('Services')?document.getElementById('Services').getBoundingClientRect().y:false
        if(!Services_y) return false
        window.scrollTo(0,Services_y-5)
    }
    
    const [img,setimg] = useState("./pic/pic1.png")
    const change_img = ()=>{
        if(window.innerWidth <= 600){
            
            setimg("./pic/bgp.png")
        }else {
            setimg("./pic/pic1.png")
        }
    }
    
    useEffect(()=>{
        change_img()
        window.addEventListener('resize',()=>{change_img()})
        
    
    },[])
    
    return (
        <div className="container">
            <div className="Description">
                <div className="Desc-container">
                    <h1 className="Title">{Home.title}</h1>
                            <p>{Home.description}</p>
                            <button>Offers !!</button>
                </div>
            </div>
            <div className="Picture">
                <div className="Pic-container">
                    <img src={img} alt="Working ..." />
                </div>
            </div>
            <div className="Arrow-down">
                    <img src="./pic/down-arrow.png" onClick={scroll_to_services} alt="Scroll down !" />
            </div>
        </div>
        )
}
export default ActOne;