import React, {useState} from 'react'
import './WeatherApp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function WeatherApp() {

const [city, setCity] = useState('');
const [temp, setTemp] = useState('');
const [weather, setWeather] = useState("");
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

  // Make an account to get api key
  const API_KEY = [1234];
  const API_BASE_URL = 'http://api.openweathermap.org/';

  const searchWeather = () => {
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
      <div className='container-fluid'>
        <div className='row'>
          <input type="text" className="search-bar" placeholder="Enter your city" 
          onChange={e => setCity(e.target.value)} value={city}/>
          <FontAwesomeIcon icon={faSearch} onClick={searchWeather}/>
        </div>
      </div>
      
      <div className='container' id="weather-container">
         <div className="weather">
           <div className="temp">`${temp}`</div>
           <div className="condition">`${weather}`</div>
           <div className="city">`${city}`</div>
           <div className="city">`${results}`</div>
           <br/>
         <div className="date">{getTodaysDate(new Date())}</div>
         <br/>
        </div>
      </div>
    </div>
  )
}
