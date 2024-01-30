import React from 'react';
import '../styles.css'

export default function WeatherData() {
  
  const [weatherData, setWeatherData] = React.useState([]);
  
  
  
  React.useEffect(() => {
      const API_key = 'c328c43c6bd18d9b260e8881195cdba0'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}')
      .then(response => response.json())
      .then(weatherData => {

        // set weather
        setWeatherData(weatherData);
        console.log(weatherData);

 
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='main-body'>
            

              {/* {weatherData.map((weather =>{
      
                

                return (
                      
                )
              }))} */}
    
    </div>
  );

}

