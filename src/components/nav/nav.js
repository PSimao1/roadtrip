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


    return (

        <div className="d-block d-sm-none fullnav">
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar-links">

                    <li className='navbar-item'>

                    <li className='navbar-item'>
                        <a href="/login" className="navbar-link">
                            <button className='btnMenu'>Login/Register</button>
                        </a>

                    </li>

                        <a href="/" className="navbar-link">
                            <input type="search" className="searchBar"></input>
                        </a>
                    </li>


                    <li className='navbar-item'>
                        <a href="/travels" className="navbar-link">
                            <button className='btnMenu' >Voyages</button>
                        </a>

                    </li>
                    <span></span>
                    <li className='navbar-item'>
                        <a href="/services" className="navbar-link">
                            <button className='btnMenu'>Services</button>
                        </a>

                    </li>
                    <li className='navbar-item'>
                        <a href="/contact" className="navbar-link">
                            <button className='btnMenu'>Contact</button>
                        </a>

                    </li>
                    <li className='navbar-item'>
                        <a href="/prepare" className="navbar-link">
                            <button className='btnMenu'>Préparation</button>
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