import React from 'react'
import './About.scss'

export default function About() {
  return (
    <div className='aboutDiv'>
      <div className='circle'></div>
      <p className='aboutTitle'>About Me</p>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col' id='currentProjects'>
            <p>Current Projects</p>
            <p>Book : Expected June 2022</p>
            <p>Manga : Expected January 2023</p>
            <p>PC Game : Expected Late 2023</p>
          </div>
          <div className='col' id='selfDescription'>
            <p>I am a Full stack developer, specializing in React, JavaScript, Node JS, Express and MongoDB. I am also a game developer and have two apps currently in the Apple App Store.</p>
            <p>In my spare time I practice piano, guitar, love to draw and write. I am currently working on a book and in the early stages of creating my first manga.</p>
            <p>I also speak English and Spanish fluently and am learning Japanese and ASL at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
