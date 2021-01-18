import React from 'react';
import Showchart from './Showchart'


const Daydetail = ({ day_weather,data}) => {
    
        
    return (
        <div>
        <button type="submit" className="home-button"> <a href="javascript:location.reload(true)">Home</a></button>
        <div className='detailed-view'>   
                 
            <div className="detail-container">
            <div className="detail"> {day_weather.dt_txt.slice(0,10)} </div>
                <div className="detail"> Wind : {day_weather.wind.speed} m/s </div>
                <div className="detail"> Pressure : {day_weather.main.pressure} hPa </div>
                <div className="detail"> Humidity : {day_weather.main.humidity}% </div>
                <div className="detail"> Visibility : {day_weather.visibility/1000} km </div>
                
            </div>
            <div className="showchart"> < Showchart day_weather={day_weather} data={data} />  </div>


        </div>
    </div>
    
    )

};



export default Daydetail;
