import React from 'react';
var moment = require('moment');

const DayCard = ({ day_weather,data}) => {
  
  let newDate = new Date();
  const weekday = day_weather.dt * 1000
  newDate.setTime(weekday)
  var current_date=day_weather.dt_txt.slice(0,10);
  
  var temp_max=day_weather.main.temp_max;
  var temp_min=day_weather.main.temp_min;
  
  
  for(let i=0;i<data.list.length;i++)
  {
      if(current_date===data.list[i].dt_txt.slice(0,10))
      {
        temp_max=Math.max(temp_max,data.list[i].main.temp_max);
        temp_min=Math.min(temp_min,data.list[i].main.temp_min);
      }  
  }

  
  var iconlist= {Thunderstorm:'http://openweathermap.org/img/wn/11d@2x.png',
              Drizzle:'http://openweathermap.org/img/wn/09d@2x.png',
              Rain:'http://openweathermap.org/img/wn/10d@2x.png',
              Snow:'http://openweathermap.org/img/wn/13d@2x.png',
              Mist:'http://openweathermap.org/img/wn/50d@2x.png',
              Smoke:'http://openweathermap.org/img/wn/50d@2x.png',
              Haze:'http://openweathermap.org/img/wn/50d@2x.png',
              Dust:'http://openweathermap.org/img/wn/50d@2x.png',
              Fog:'http://openweathermap.org/img/wn/50d@2x.png',
              Sand:'http://openweathermap.org/img/wn/50d@2x.png',
              Ash:'http://openweathermap.org/img/wn/50d@2x.png',
              Squall:'http://openweathermap.org/img/wn/50d@2x.png',
              Tornado:'http://openweathermap.org/img/wn/50d@2x.png',
              Clear:'http://openweathermap.org/img/wn/01d@2x.png', 
              Clouds:'http://openweathermap.org/img/wn/02d@2x.png',}

  return (
    
      <div className="card">
        <div className="city-details">{moment(newDate).format('dddd')}</div>
        <div className="city-details">{moment(newDate).format('MMMM Do')}</div>
        <div className="city-details"> <h3> {Math.round(day_weather.main.temp)}°C </h3> </div>
        <div className="icon">
          <img src={iconlist[day_weather.weather[0].main]} alt="Iamge" />
        </div>
        <div className="city-details"> {Math.round(temp_max)}°C | {Math.round(temp_min)}°C </div>
        
        <div className="city-details"> {day_weather.weather[0].main}</div>
      </div>
    
  )
}

export default DayCard;
