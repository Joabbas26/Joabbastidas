import React from 'react'
import './Projects.scss'
import { Link } from 'react-router-dom';
import snakeEaters from './Images/snakeEaters.png';
import employeeTable from './Images/EmployeeRanking.png';
import weatherApp from './Images/WeatherApp.png';


export default function Projects() {
  return (
    <div className='projectsDiv'>
      <p className='projectsTitle'>Projects</p>
      {/* Web projects */}
      <p className='projectTitle' id='webDevSection'>Full Stack</p>
      <div className='container' id='projectsSection'>
        <div className='row'>
          <div className='col-md-6 col-sm-12' id='card'>
          <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={employeeTable} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Rank Table</h5>
            <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
          </div>
        </div>
        <div className='col-md-6 col-sm-12' id='card'>
        <Link to="/weather"><img className='img-fluid' id='projectImage' src={weatherApp} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Weather API</h5>
            <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
          </div>
        </div>
        </div>
        
      </div>
      {/* Art projects */}
      <p className='projectTitle' id='artSection'>Art</p>
      <div className='container' id='projectsSection'>
        <div className='row' id='commingSoon'>
          Comming Soon!
        </div>
      </div>

      {/* Game projects */}
      <p className='projectTitle' id='gamesSection'>Games</p>
      <div className='container' id='projectsSection'>
        <div className='row'>
          <div className='col-md-6'>
            <a href='https://apps.apple.com/us/app/snakeeaters/id1574034388'>
              <img className='img-fluid' id='projectImage' src={snakeEaters} alt="projectImage" style={{borderRadius: '10px'}}/>
            </a>
          </div>
         
        </div>
      </div>

      {/* Manga projects */}
      <p className='projectTitle' id='mangaSection'>Manga</p>
        <div className='container' id='projectsSection'>
          <div className='row' id='commingSoon'>
            Comming Soon!
          </div>
        </div>

      {/* Books projects */}
      <p className='projectTitle' id='booksSection'>Books</p>
      <div className='container' id='projectsSection'>
        <div className='row' id='commingSoon'>
          Comming Soon!
        </div>
      </div>
    </div>
  )
}