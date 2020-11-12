import React, {useState} from 'react';
import "./NavBar.css"
function NavBar(){
    const [ck,setCk] = useState(false);
    const show_nav= ()=> setCk(!ck)

    const hide_nav = {
        position: "fixed",
        bottom: "120px",
        right:" 20px",
        transition: "250ms ease-out",
        display:"contents"

      };
    const show_naav = {
        position:"fixed",
        top:"90px",
        animation:" DropDown 3s",
        transition:"opacity 100ms",
        opacity:1
    }
    const show_naav1 = {
        position:"fixed",
        top:"177px",
        animation:" DropDown1 3s",
        transition:"opacity 100ms",
        opacity:1
    }
    const show_naav2 = {
        position:"fixed",
        top:"262px",
        animation:" Droptwo 3s",
        transition:"opacity 100ms",
        opacity:1
    }
    const scroll_To = (to)=>{
        const elem = document.getElementById(to)
        elem.scrollIntoView()
    }
    return(
        <div className="NavBar">
            <div className="Nav">
                <img src="./pic/icon1.png" alt="Navigation" onClick={show_nav} className="Sett" />
                <ul>
                    <li> 
                        <img src="./pic/icon2.png" onClick={(e)=>{scroll_To('Home')}} style={ck?show_naav:hide_nav} alt="Home" /> 
                    </li>
                    <li>
                        <img src="./pic/icon3.png" onClick={(e)=>{scroll_To('Contact')}} style={ck?show_naav2:hide_nav} alt="Contact" />
                    </li>
                    <li>
                        
                        <img src="./pic/icon4.png" onClick={(e)=>{scroll_To('Services')}}  style={ck?show_naav1:hide_nav} alt="About" />
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;
