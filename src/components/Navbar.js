import { useState, useEffect } from 'react';

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
      <h1 className="nav__title">NETFLIX</h1>
    </nav>
  )
}

export default Navbar;