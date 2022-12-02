import React from "react";
import DateTime from "./dateandtime";
import './styles/header.css';
import './styles/output.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1 className="heade"> <img src={require(`./icons/main_icon.png`)} alt="mainicon" className="mainicon"/> Website name <DateTime/></h1> 
            </div>
        )
    }
}
export default Header;