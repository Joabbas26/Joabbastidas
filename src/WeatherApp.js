import React, {useState} from 'react';
import './WeatherApp.scss'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCloud, faCloudRain, faSun, faMoon, faCloudSun, faBoltLightning, faWind, faSnowflake, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

export default function WeatherApp() {

const [city, setCity] = useState('');
const [results, setResults] = useState({});


  const getTodaysDate = (d) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ];
 
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
 
    var day = days[d.getDay()]; // Fetches the day of the week
    var date = d.getDate(); // Fetches the date i.e. 1st - 31st day of the month
    var month = months[d.getMonth()]; // Fetches the month
    var year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  var Time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // api key and base url
  const api = {
    key: "3fabe9fdca16afb5e55e69008aee39d3",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const searchWeather = () => {
    // Get weather from 
    fetch(
      `${api.base}weather?q=${city}&units=imperial&appid=${api.key}`
    )
      .then(response => response.json())
      // update the results
      .then(results => {
        setResults(results);
      })
      .catch(error => console.log(error))
      setCity('');
      
      /* 
      axios.get(`${api.base}weather?q=${city}&units=imperial&appid=${api.key}`).then((response) => {
        setResults(response.results);
        console.log(response.results);
      })
      setCity('');
      */
  }

  const selectCondition = () => {
    const condition = [
      'Clouds',
      'Fog',
      'Mist',
      'Rain',
      'Heavy Rain',
      'Wind',
      'Partly Cloudy',
      'Sun',
      'Clear',
      'Snow',
      'Thunder',
      'Night'
    ];

    const iconCondition = [
      faCloud,
      faCloud,
      faCloud,
      faCloudRain,
      faCloudShowersHeavy,
      faWind,
      faCloudSun,
      faSun,
      faSun,
      faSnowflake,
      faBoltLightning,
      faMoon
    ];
    for(var i = 0; i < condition.length; i++){
      if(results.weather[0].main === condition[i]){  
        return <FontAwesomeIcon icon={iconCondition[i]} size='10x'/>
      }
    }  
  }

  return (
    <div className='weatherApp'>
      <div className='wrap'>
        {/* <form onSubmit={searchWeather}>  */}
          <div className="searchField"> 
            <input type="search" name="search" required placeholder="Enter Your City" 
            className='searchInput' value={city} onChange={e => setCity(e.target.value)}/>
            <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} onClick={searchWeather}/> 
            </button>
          </div>
        {/* </form> */}
      </div>
      
      <div className='container' id="weatherContainer">
         <div className="weather">
           <div className="city">
             {/* {city} */}
             <p>{results.name}</p>
             </div>
           <div className='row' id='tempInfo'>
            <div className='col-md-8' id="condition">
              {results.weather ? selectCondition() : null}
              {results.weather ? <p>{results.weather[0].main}</p> : null}
              {/* <p>{weather}</p> */}
            </div>
            <div className='col-md-4' id="temperature">
              {/* {temp + '°F'} */}
              {results.main ? <p>{results.main.temp.toFixed()}°F</p> : null}
              </div>
           </div>
           <div className='dateAndTime'>
             <div className="time">{Time}</div>
             <div className='date'>{getTodaysDate(new Date())}</div>
           </div>
        </div>
      </div>
    </div>
  )
}

/*


      
*/