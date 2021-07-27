import { useState, useEffect } from 'react';

import logo from '../assets/netflix-retro-logo.png';
import profileImg from '../assets/profile-chris.png'

const Navbar = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      };
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav-background"}`}>
      <img className="nav__logo" src={logo} alt="retro netflix logo" />
      {/* image src Rafael Serra https://www.fael.pt/ */}
      <img className="nav__user" src={profileImg} alt="User icon" />
    </nav>
  )
}

export default Navbar;