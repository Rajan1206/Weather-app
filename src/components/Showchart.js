import React from 'react';
import {Line} from 'react-chartjs-2';


const Showchart = ({ day_weather,data}) => {
    
    var current_date=day_weather.dt_txt.slice(0,10);
    
    var label=[],temp_max=[],temp_min=[];
    var max=-100,min=+100;

    for(let i=0;i<data.list.length;i++)
    {
        if(current_date===data.list[i].dt_txt.slice(0,10))
        {
            label.push(data.list[i].dt_txt.slice(11,13));
            temp_max.push(Math.round(data.list[i].main.temp_max));
            temp_min.push(Math.round(data.list[i].main.temp_min));
            max=Math.max(max,Math.round(data.list[i].main.temp_max));
            min=Math.min(min,Math.round(data.list[i].main.temp_min));
        }  
    }
    return (

        <div className="showchart">   
            <Line 
                data={{
                    labels:label,
                    datasets:[
                    {
                        label:'Max Temperature',
                        data:temp_max,
                        borderColor: 'rgba(255,0,0,0.9)',
                        fontColor: 'black',
                        fill:true
                    },
                    {
                        label:'Min Temperature',
                        data:temp_min,
                        borderColor: 'rgba(0,0,0,0.9)',
                        fontColor: 'black',
                        fill:true
                    }
                ]
                }}
                width={600}
                height={300}
                options={{
                    maintainAspectRatio:false,
                    scales:{
                        
                        yAxes:[{
                            gridLines: {
                                display: false,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: '°C',
                                fontColor:'#000000'
                            },
                            ticks: {
                                fontColor:'#000000',
                                suggestedMin:min,
                                max: max,
                                steps: (max-min)/2,
                            }
                        }],
                        xAxes:[{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor:'#000000',
                            }, 
                            scaleLabel: {
                                display: true,
                                labelString: 'Time',
                                fontColor:'#000000'
                            },
                        }]
                    }
                }}
            />
            
        </div>
    
    
    )

};



export default Showchart;
