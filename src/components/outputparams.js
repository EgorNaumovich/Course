import React from "react";
import WeatherOut from "./weatheroutput";
import './styles/chechboxes.css';

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
            <div className = "boxes" style={{textAlign: "center", marginTop: "5px"}}> <div className="chktitle">Display options</div>
            <div className = "innerboxes"> 
            <input type="checkbox" id="loc" name="loc" checked/>
            <label className="chklabel" htmlFor="loc">Location</label>
            
            <input type="checkbox" id="tmp" name="tmp" checked/>
            <label htmlFor="tmp">Temperature</label>

            <input type="checkbox" id="feel" name="feel" ischecked={this.state.feel} onChange={this.checkChange}/>
            <label htmlFor="feel">Feels like</label>

            <input type="checkbox" id="pres" name="pres" ischecked={this.state.pres} onChange={this.checkChange}/>
            <label htmlFor="pres">Pressure</label>
                
            <input type="checkbox" id="visib" name="visib" ischecked={this.state.visib} onChange={this.checkChange}/>
            <label htmlFor="visib">Visibility</label>

            <input type="checkbox" id="humid" name="humid" ischecked={this.state.humid} onChange={this.checkChange}/>
            <label htmlFor="humid">Humidity</label>

            <input type="checkbox" id="srise" name="srise" ischecked={this.state.srise} onChange={this.checkChange}/>
            <label htmlFor="srise">Sunrise</label>

            <input type="checkbox" id="sset" name="sset" ischecked={this.state.srise} onChange={this.checkChange}/>
            <label htmlFor="sset">Sunset</label>
            </div>
            

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