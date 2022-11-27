import React from "react";
import './styles/heade.css';
import './styles/output.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1 className="heade"> <img src={require(`./icons/main_icon.png`)} alt="mainicon" className="mainicon"/> Website name</h1>
            </div>
        )
    }
}
export default Header;