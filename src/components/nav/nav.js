import { useState } from 'react';
import '../../App.css'


function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    console.log(showLinks);

/*   function ouvrirNavBar() {
        const sideBar = document.querySelector('.navbar-links');
        navbar-links.classList.toggle('ouvert'); //Ajoute la classe "ouverte"

    }*/


    return(

        <div className="d-block d-sm-none fullnav">
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}> 
                <ul className="navbar-links">
                
                <li className='navbar-item'>
            <a href="/" className="navbar-link">
            <input type="search" className="searchbar"></input>
            </a>
</li>

        <li className='navbar-item'>
            <a href="/" className="navbar-link">
            <button className='btn1 button-desktop'>Voyages</button>
            </a>

        </li>
        <span></span>
        <li className='navbar-item'>
            <a href="/" className="navbar-link">
            <button className='btn1 button-desktop'>Services</button>
            </a>

        </li>
        <li className='navbar-item'>
            <a href="/" className="navbar-link">
            <button className='btn1 button-desktop'>Contact</button>
            </a>

        </li>
        <li className='navbar-item'>
            <a href="/" className="navbar-link">
            <button className='btn1 button-desktop'>Préparation</button>
            </a>

        </li>

        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
        </nav>
    </div>

    );
}

export default Nav