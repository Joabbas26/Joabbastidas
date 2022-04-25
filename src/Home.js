import React from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


export default function Home() {
  return (
    <div className='HomeDiv'>
      <p className='homeTitle'>Welcome to My Site</p>
          <div className='container' id='grayTextDiv'>
            <div className='row' id='optionsDiv'>
              <div className='col-md-4 col-sm-12' id='circleDiv'>
                <img className='img-fluid' id='circleImage' src={"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"} alt="mainImage"/>
              </div>
              <div className='col-md-7 col-sm-6' id='textsDiv'>
                <div className="content" id='devText'>
                  <div className="content__container">
                    <ul className="content__container__list" onClick={event => window.location.href='/projects#webDevSection'}>
                      <li className="content__container__list__item">HTML</li>
                      <li className="content__container__list__item">CSS</li>
                      <li className="content__container__list__item">JavaScript</li>
                      <li className="content__container__list__item">React</li>
                    </ul>
                  </div>
                </div>
                <p className='artText' onClick={event =>  window.location.href='/projects#artSection'}>Artist</p>
                <p className= 'gamesText' onClick={event =>  window.location.href='/projects#gamesSection'}>Games</p>
                <p className='mangaText' onClick={event =>  window.location.href='/projects#mangaSection'}> 漫画 </p>
                <p className='novelText anim-typewriter' onClick={event =>  window.location.href='/projects#booksSection'}>Novelist</p>
              </div>
              <div className='col-md-1 col-sm-6' id='iconDiv'>
                  <a href='https://www.amazon.com/'><FontAwesomeIcon icon={faAmazon}/></a>
                  <a href='https://github.com/Joabbas26?tab=repositories'><FontAwesomeIcon icon={faGithub}/></a>
                  <a href='https://www.instagram.com/joab_bastidas/'><FontAwesomeIcon icon={faInstagram}/></a>
                  <a href='https://twitter.com/Joabbas26'><FontAwesomeIcon icon={faTwitter}/></a>
                  <a href='https://www.linkedin.com/in/joab-bastidas/'><FontAwesomeIcon icon={faLinkedin}/> </a>
              </div>
            </div>
          </div>
        </div>
  );
};