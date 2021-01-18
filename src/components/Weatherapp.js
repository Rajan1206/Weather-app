import './../App.css'
import React, { useState,useEffect } from 'react';
import Daycard from './Daycard';
import Daydetail from './Daydetail';


const  Weatherapp = () =>
{
  
  const [data,setData]= useState({});
  const [dailydata,setDailydata]= useState([]);
  const [city,setCity] = useState('Ahmedabad');
  const [day,setDay]= useState(-1);

   
  const api_key='24785924bf85fb398e21592d6b25c1af';
  const api_url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${api_key}`;


  const search = async () => {
      await fetch(api_url).then(resposne=>resposne.json())
      .then(result => {  setData(result);
        if(result.cod==="200")
          setDailydata([result.list[1], result.list[9], result.list[17], result.list[25], result.list[33]]);
      })
  }

  useEffect(()=>{
      search();
  },[])

  return (
  
    <div>
    { (day===-1) ? <div className="title">  5-day Weather Forecast   </div>  : ' ' }
      <div className='Main'>
        <div className="search-box">  
          <input 
            type="text"
            placeholder="City..."
            onChange={e => setCity(e.target.value)}
            value={city}
          />
          <button type="submit" className="search-button" onClick={search}>  
            <i className="fa fa-search"></i>
          </button> 
        </div>

        {( data.cod === "200") ? (
          
          <div className="weather-details">
            <div className="location">{data.city.name}, {data.city.country}</div>

              { (day===-1) ?  
                ( <div  className='day-card'> {dailydata.map((day_weather,index) =>  <div onClick={()=>{setDay(index)}}> <Daycard data={data} day_weather={day_weather} />  </div>)} </div> )
                :
                (  <div className="day-detail">  <Daydetail data={data} day_weather={dailydata[day]}  day={day}  /> </div>  )
              }
            </div>
        ) :  
        (
          <div classname="undefined-city" style={{margin:150, paddingLeft:100}}> <h4> City not found. Please enter valid city name. </h4> </div>
        )}
      </div>
    </div>
    
  );

}



export default Weatherapp;  
