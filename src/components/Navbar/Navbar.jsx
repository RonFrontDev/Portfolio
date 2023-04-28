import './Navbar.scss'
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        console.log("Button pressed")
        setIsOpen(!isOpen);
};

  return (
    
    <nav className="navbar">
        {/* <a className='navbar__logo' href="/">Ron_Frontend_Web_Developer</a> */}
        <div className='navbar__logo'>
          <img className='navbar__icon'src="svg/imac.svg" alt="" />
          <div>
            <a className='navbar__top' href="/">R.C. Frontend</a>
            <p className='navbar__bottom'>React Developer </p>
          </div>
        </div>
        <ul className={`navbar__items ${ isOpen ? 'active' : ''}`}>
        <div className={`logo ${ isOpen ? 'mobile' : 'desktop'}`}>
          <img className='navbar__icon'src="svg/imac.svg" alt="" />
          <div>
            <a className='navbar__top' href="/">R.C. Frontend</a>
            <p className='navbar__bottom'>React Developer </p>
          </div>
        </div>
            <li className='navbar__item'><a onClick={toggleMenu} className='navbar__link'href="#homeSection">Home</a></li>
            <li className='navbar__item'><a onClick={toggleMenu} className='navbar__link'href="#aboutSection">About</a></li>
            <li className='navbar__item'><a onClick={toggleMenu} className='navbar__link'href="#projectsSection">Projects</a></li>
            <li className='navbar__item'><a onClick={toggleMenu} className='navbar__link'href="#contactSection">Contact</a></li>
        </ul>
        <button className="navbar__burger" onClick={toggleMenu}>
       
      {[1, 2, 3].map(item => (
        <span
          key={item}
          className={classNames([
            "navbar__burger-line",
            isOpen ? 'navbar__burger-line--close' : ''
          ])}
        />
      ))}
        </button>
    </nav>
  )
}

function classNames(classes) {
  return classes.join(" ")
}

export default Navbar
