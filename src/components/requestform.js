import React from "react";
import './styles/lis.css';
import './styles/inpform.css';
import './styles/selectform.css';

class Form extends React.Component{



    render(){
        return(
        <div className="row">
            
            <div className="column" style={{textAlign: "center", marginTop: "30px", marginBottom:"30px"}}>
                <form id="el1" className="inpform" onSubmit={this.props.callWeather}>
                    <fieldset>
                        <legend>Type your city name</legend>
                    <input type="text" className="textform" name="city" placeholder="City"/>
                   <div><button className="but1" type="submit">Check weather</button></div>
                   </fieldset>
                </form>
            </div>
            <div className="column1" style={{textAlign: "center", marginTop: "30px", marginBottom:"30px"}}>or</div>
            <div className="column" style={{textAlign: "center", marginTop: "30px", marginBottom:"30px"}}>
            <form id="el2" className="selectform" onSubmit={this.props.callWeather}>
                <fieldset>
                    <legend>Choose city name from list</legend>
                <ul className="lst">
                <li style={{ listStyleType: "none", display: "inline"}}><input type="radio" id="1" name="city" value="London"/>
                <label htmlFor="cit1">London</label></li>
                <li style={{ listStyleType: "none", display: "inline" }}><input type="radio" id="2" name="city" value="Minsk"/>
                <label htmlFor="cit2">Minsk</label></li>
                <li style={{ listStyleType:  "none", display: "inline"}}><input type="radio" id="3" name="city" value="Glasgow"/>
                <label htmlFor="cit3">Glasgow</label></li>
                <li style={{ listStyleType: "none", display: ""}}><button className="but2" >Check weather from list</button></li>
                </ul>
                </fieldset>
                </form>
            </div>

        </div>
        );
    }
}
export default Form;