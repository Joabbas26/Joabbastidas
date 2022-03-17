import React, {useState} from 'react'
import './WeatherApp.scss'

export default function WeatherApp() {

const [query, setQuery] = useState('');
const [city, setCity] = useState('');
const [temp, setTemp] = useState('');
const [weather, setWeather] = useState({});
const [results, setResults] = useState(null);

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
    ]
 
    var day = days[d.getDay()]; // Fetches the day of the week
    var date = d.getDate(); // Fetches the date i.e. 1st - 31st day of the month
    var month = months[d.getMonth()]; // Fetches the month
    var year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  // Make an account to get api key
  //const API_KEY = [YOUR_API_KEY];
  const API_BASE_URL = 'http://api.openweathermap.org/';

  const searchWeather = () => {
    // Get weather from api
    fetch(
      // `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      // update the results
      .then((results) => setResults(results));
  }

  return (
    <div className='weatherApp'>
      <div className='row'>
        <div className='col'>
          <input type="text" className="search-bar" placeholder="Enter your city" 
          onChange={e => setQuery(e.target.value)} value={query} onKeyPress={searchWeather}/>
        </div>
        <div className='col'>
          <button onClick={searchWeather}>Search</button>
        </div>
      </div>
      
      <div className="weather-container">
         <div className="weather">
           <div className="temp">`${temp}`</div>
           <div className="condition">`${weather}`</div>
           <div className="city">`${city}`</div>
           <br/>
         <div className="date">{getTodaysDate(new Date())}</div>
         <br/>
        </div>
      </div>
    </div>
  )
}
