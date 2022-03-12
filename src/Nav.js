import React, {useState, useEffect} from 'react';
import './Nav.scss';
import { Link, NavLink} from 'react-router-dom';


export default function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [navStyle, setNavStyle] = useState();
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        toggleMenu === true ? setNavStyle({display:'none'}) : setNavStyle({display:'block'});
      }

      const [screenWidth, setScreenWidth] = useState(window.innerWidth)

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
    
      }, [])

  return (
    <div className='navDiv'>
        <div className="nav-container">
            <NavLink to="/" className="brand">Joab Bastidas</NavLink>
            <nav>
                <div className="nav-mobile">
                    <button id="nav-toggle" onClick={toggleNav}><span></span></button>
                </div>
                {(toggleMenu || screenWidth > 500) && (
                <ul className="nav-list" style={navStyle}>
                    <li onClick={toggleNav}><Link to="/projects">Projects</Link></li>
                    <li onClick={toggleNav}><Link to="/about">About</Link></li>
                    <li onClick={toggleNav}><Link to="/contact">Contact</Link></li>
                </ul>
                )}
            </nav>
        </div>
    </div>
  )
}
