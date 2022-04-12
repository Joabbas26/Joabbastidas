import React from 'react'
import './Projects.scss'
import { Link } from 'react-router-dom';


export default function Projects() {
  return (
    <div className='projectsDiv'>
      <p className='projectsTitle'>Projects</p>
      {/* Web projects */}
      <p className='webDevTitle'>Full Stack</p>
      <div className='container' id='webDevSection'>
        <div className='row'>
          <div className='col' id='card'>
          <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={"https://media.geeksforgeeks.org/wp-content/uploads/20200405130022/TableCreation.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Rank Table</h5>
            <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
          </div>
        </div>
        <div className='col' id='card'>
        <Link to="/weather"><img className='img-fluid' id='projectImage' src={"https://images-na.ssl-images-amazon.com/images/I/81K-NehZ++L.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Weather API</h5>
            <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
          </div>
        </div>
        </div>
        
      </div>
      {/* Art projects */}
      <p className='webDevTitle'>Art</p>
      <div className='container' id='webDevSection'>
        <div className='row'>
          <div className='col' id='card'>
          <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={"https://media.geeksforgeeks.org/wp-content/uploads/20200405130022/TableCreation.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Rank Table</h5>
            <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
          </div>
        </div>
        <div className='col' id='card'>
        <Link to="/weather"><img className='img-fluid' id='projectImage' src={"https://images-na.ssl-images-amazon.com/images/I/81K-NehZ++L.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Weather API</h5>
            <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
          </div>
        </div>
        </div>
      </div>

      {/* Game projects */}
      <p className='webDevTitle'>Games</p>
      <div className='container' id='webDevSection'>
        <div className='row'>
          <div className='col' id='card'>
          <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={"https://media.geeksforgeeks.org/wp-content/uploads/20200405130022/TableCreation.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Rank Table</h5>
            <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
          </div>
        </div>
        <div className='col' id='card'>
        <Link to="/weather"><img className='img-fluid' id='projectImage' src={"https://images-na.ssl-images-amazon.com/images/I/81K-NehZ++L.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Weather API</h5>
            <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
          </div>
        </div>
        </div>
      </div>

      {/* Manga projects */}
      <p className='webDevTitle'>Manga</p>
        <div className='container' id='webDevSection'>
          <div className='row'>
            <div className='col' id='card'>
            <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={"https://media.geeksforgeeks.org/wp-content/uploads/20200405130022/TableCreation.png"} 
            alt="projectImage"/></Link>
            <div className="card-body">
              <h5 className="card-title">Rank Table</h5>
              <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
            </div>
          </div>
          <div className='col' id='card'>
          <Link to="/weather"><img className='img-fluid' id='projectImage' src={"https://images-na.ssl-images-amazon.com/images/I/81K-NehZ++L.png"} 
            alt="projectImage"/></Link>
            <div className="card-body">
              <h5 className="card-title">Weather API</h5>
              <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
            </div>
          </div>
          </div>
        </div>

      {/* Books projects */}
      <p className='webDevTitle'>Books</p>
      <div className='container' id='webDevSection'>
        <div className='row'>
          <div className='col' id='card'>
          <Link to="/mainTable"><img className='img-fluid' id='projectImage' src={"https://media.geeksforgeeks.org/wp-content/uploads/20200405130022/TableCreation.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Rank Table</h5>
            <p className="card-text">Open a modal and add data to a table. Perform calculation based on data. Able to delete rows and edit data.</p>
          </div>
        </div>
        <div className='col' id='card'>
        <Link to="/weather"><img className='img-fluid' id='projectImage' src={"https://images-na.ssl-images-amazon.com/images/I/81K-NehZ++L.png"} 
          alt="projectImage"/></Link>
          <div className="card-body">
            <h5 className="card-title">Weather API</h5>
            <p className="card-text">Make an api call to get local weather data and show in a detailed view while being UI friendly </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}