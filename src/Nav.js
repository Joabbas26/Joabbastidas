import React from 'react';
import './Nav.scss';
import { Link, NavLink} from 'react-router-dom';

export default function Nav() {
  return (
    <div className='NavDiv'>
        <div className="nav-container">
            <NavLink to="/" className="brand">Joab Bastidas</NavLink>
            <nav>
                <div className="nav-mobile">
                    <button id="nav-toggle" href="#!"><span></span></button>
                </div>
                <ul className="nav-list">
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
