import { Link } from 'react-router-dom';
import './MainNav.css';
import logo from '../IMAGES/logo.png';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

function MainNav() {

    const navRef = useRef();

    const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <>
        {/* <div className="sticky">
            <div className="sticky_info">
                <p>4006 Mandrake Road, Madison WI 53704</p>
                <p>608-772-2264</p>
                <p>universeafh@gmail.com</p>
            </div>
            <div className="socials">
                <p>Instagram</p>
            </div>
        </div> */}
        <header>

            <div className='logo__wrap'>
                <img src={logo} alt='Logo' />
                <p>Universe Adult<br/>Family Home, LLC.</p>
            </div>
            <nav ref={navRef} className='main__nav'>
            <ul className='links__wrap'>
                <li><Link to='/' className='active'>Home</Link></li>
                <li><Link to='/AboutUs'>About Us</Link></li>
                <li><Link to='/OurServices'>Services</Link></li>
                <li><Link to='/Careers'>Careers</Link></li>
            </ul>
            <button className='nav__btn rem'><Link to='/ContactUs'>Contact Us</Link></button>
            <button className='navs__btn navs__close' onClick={showNavbar}><FontAwesomeIcon icon={faClose} /></button>
            </nav>
            <div className="button__wrap">
            <button className='nav__btn' style={{background: 'none', color: '#03989E'}}><Link to='/Schedule' style={{color:'#03989E'}}>Schedule</Link></button>
            <button className='nav__btn'><Link to='/ContactUs'>Contact Us</Link></button>
            </div>
            <button className='navs__btn' onClick={showNavbar}><FontAwesomeIcon icon={faBars} /></button>
        </header>
        </>
    )
};

export default MainNav;