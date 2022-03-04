import React from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <div className='HomeDiv'>
          <div className='grayTextDiv'>
            <p className='homeTitle'>Welcome to My Site</p>
            <div className='textsDiv'>
              <p className='devText'>[ HTML ]</p>
              <p className='artText'>Artist</p>
              <p className= 'gamesText'>Games</p>
              <p className='mangaText'> 漫画 </p>
              <p className='mangaSubText'>(Man-ga)</p>
              <p className='novelText'>Novelist</p>
            </div>
            <div className='iconDiv'>
                <FontAwesomeIcon icon={faAmazon}/>
                <FontAwesomeIcon icon={faGithub}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} /> 
            </div>
          </div>
          <img className='circleBackground' src={"https://file.rendit.io/n/Bt3oEMNwsyB8p6foShnS.svg"} alt=''/>
          <img className='circleImage' src={"https://file.rendit.io/n/AiJon90Vza9fDzbo36N2.png"} alt="mainImage"/>
        </div>
  );
};