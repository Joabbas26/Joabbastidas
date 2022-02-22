import React from 'react';
import './Nav.scss';
import { Link, NavLink} from 'react-router-dom';

export default function Nav() {
  return (
    <div className='NavDiv'>
        <div className="nav-container">
            <div className="brand"><NavLink to="/" className="active">Joab Bastidas</NavLink></div>
            <nav>
                <div className="nav-mobile">
                    <a id="nav-toggle" href="#!"><span></span></a>
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
