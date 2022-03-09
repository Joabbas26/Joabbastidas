import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='contactDiv'>
      <p className='contactTitle'>Get In Touch</p>
      <div className='container' id='contactMainForm'>
        <div className='row'>
          <div className='col-md-8' id='contactForm'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='name'>Name</label>
                  <br/>
                  <input className='form-control' type='text' name='name' placeholder='Enter Your Name'/>
                </div>
                <div className='col'>
                  <label htmlFor='number'>Phone Number</label>
                  <br/>
                  <input className='form-control' type='tel' name='number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='123-456-7890'/>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='email'>Email</label>
                  <br/>
                  <input className='form-control' type='email' name='email' placeholder='Email Address'/>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='message'>Message</label>
                  <br/>
                  <textarea className='form-control' name="message" rows="4" cols="50"/>
                </div>
              </div>
              <button className='btn btn-primary' id='submitButton' onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <div className='col-md-4'>
            <p className='contactInfo'>Contact Info</p>
            <div className='emailInfo'>
                <FontAwesomeIcon icon={faEnvelope} />
               <p> Joabbastidas@gmail.com </p>
            </div>
            <div className='numberInfo'>
              <FontAwesomeIcon icon={faPhone} /> 
               <p>(123)-456-7890 </p>
            </div>
            <div className='linkedInInfo'>
              <FontAwesomeIcon icon={faLinkedin}/>
              <p>Linkedin.com/joab_bastidas </p>
            </div>
            <div className='instagramInfo'>
            <FontAwesomeIcon icon={faInstagram}/>
              <p>Instagram.com/joabbas26 </p>
            </div>
            <div className='twitterInfo'>
              <FontAwesomeIcon icon={faTwitter}/>  
              <p>Twitter.com/joab_bastidas </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
