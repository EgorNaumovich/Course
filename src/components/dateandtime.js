import React, {useState, useEffect} from "react";

export const DateTime = () =>{

    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div className="datetime">
            <div> Time : {date.toLocaleTimeString()}</div>
            <div> Date : {date.toLocaleDateString()}</div>
        </div>
    )

}

export default DateTime;