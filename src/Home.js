import React from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


export default function Home() {
  return (
    <div className='HomeDiv'>
      <p className='homeTitle'>Welcome to My Site</p>
          <div className='container' id='grayTextDiv'>
            <div className='row' id='optionsDiv'>
              <div className='col-md-4 col-sm-12' id='circleDiv'>
                <img className='img-fluid' id='circleImage' src={"https://file.rendit.io/n/AiJon90Vza9fDzbo36N2.png"} alt="mainImage"/>
              </div>
              <div className='col-md-5 col-sm-6' id='textsDiv'>
                <p className='devText'>[ HTML ]</p>
                <p className='artText'>Artist</p>
                <p className= 'gamesText'>Games</p>
                <p className='mangaText'> 漫画 </p>
                <p className='mangaSubText'>(Man-ga)</p>
                <p className='novelText'>Novelist</p>
              </div>
              <div className='col-md-3 col-sm-6' id='iconDiv'>
                  <FontAwesomeIcon icon={faAmazon}/>
                  <FontAwesomeIcon icon={faGithub}/>
                  <FontAwesomeIcon icon={faInstagram}/>
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} /> 
              </div>
            </div>
          </div>
        </div>
  );
};