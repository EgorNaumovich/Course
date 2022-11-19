import React from "react";
import App from "../App";
import WeatherOut from "./weatheroutput";

class CheckBoxParams extends React.Component{



    constructor(props) {
        super(props);
        this.state = {
            feel: false,
            pres: false,
            srise: false,
            sset: false,
            visib: false,
            humid: false
        };
      }

    checkChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    };


    

    render(){
        return(
            <div>
            <input type="checkbox" id="loc" name="loc" checked/>
            <label for="loc">Location</label>
            
            <input type="checkbox" id="tmp" name="tmp" checked/>
            <label for="tmp">Temperature</label>

            <input type="checkbox" id="feel" name="feel" ischecked={this.state.feel} onChange={this.checkChange}/>
            <label for="feel">Feels like</label>

            <input type="checkbox" id="pres" name="pres" ischecked={this.state.pres} onChange={this.checkChange}/>
            <label for="pres">Pressure</label>

            <input type="checkbox" id="visib" name="visib" ischecked={this.state.visib} onChange={this.checkChange}/>
            <label for="visib">Visibility</label>

            <input type="checkbox" id="humid" name="humid" ischecked={this.state.humid} onChange={this.checkChange}/>
            <label for="humid">Humidity</label>

            <input type="checkbox" id="srise" name="srise" ischecked={this.state.srise} onChange={this.checkChange}/>
            <label for="srise">Sunrise</label>

            <input type="checkbox" id="sset" name="sset" ischecked={this.state.srise} onChange={this.checkChange}/>
            <label for="sset">Sunset</label>

            <WeatherOut 
            fe={this.state.feel}
            pr={this.state.pres}
            sr={this.state.srise}
            ss={this.state.sset}
            vi={this.state.visib}
            hu={this.state.humid}
            
            desc={this.props.desc}
            icon={this.props.img}
            temp={this.props.temp}
            feels={this.props.feels}
            city={this.props.city}
            country={this.props.country}
            pressure={this.props.pressure}
            humidity={this.props.humidity}
            visibility={this.props.visibility}
            sunrise={this.props.sunrise}
            sunset={this.props.sunset}
            error={this.props.error} 
            />

            </div>

        );
    }


}


export default CheckBoxParams;