import React, {useState} from 'react';
import './WeatherApp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCloud, faCloudRain, faSun, faMoon, faCloudSun, faCloudBolt, faWind, faSnowflake } from '@fortawesome/free-solid-svg-icons';

export default function WeatherApp() {

const [city, setCity] = useState('');
const [temp, setTemp] = useState('');
const [weather, setWeather] = useState("");
const [results, setResults] = useState('');


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

  // Make an account to get api key
  const API_KEY = [1234];
  const API_BASE_URL = 'http://api.openweathermap.org/';

  const searchWeather = (e) => {
    // Get weather from api
    fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        response.json();
        setWeather(response);
        setTemp("");
      })
      // update the results
      .then((results) => setResults(results));
  }

  return (
    <div className='weatherApp'>
      <div className='wrap'>
        <form onSubmit={searchWeather}> 
          <div className="searchField"> 
            <input type="search" name="search" required placeholder="Enter Your City" 
            className='searchInput' onChange={e => setCity(e.target.value)}/>
            <button type="search" className="searchButton">
            <FontAwesomeIcon icon={faSearch} onClick={searchWeather}/> 
            </button>
          </div>
        </form>
      </div>
      
      <div className='container' id="weatherContainer">
         <div className="weather">
           <div className="city">{city}</div>
           <div className='row' id='tempInfo'>
            <div className='col' id="condition">{weather}</div>
            <div className='col' id="temperature">{temp}</div>
           <div className='dateAndTime'>
             <div className="time">{Time}</div>
             <div className='date'>{getTodaysDate(new Date())}</div>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}

// onChange={e => setCity(e.target.value)} 