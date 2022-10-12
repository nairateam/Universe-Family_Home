import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import sman from '../IMAGES/sman.jpg';
import './OurServices.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
    return ( 
        <div className='serv_sect'>
            <MainNav />
            <div className="about__top">
                <h2>Our Services</h2>
                <div className="title_line" />
                <p>The peace and comfort that your loved one is in safe and perfect hands.
                </p>
            </div>
            <div className="services__con">
                <p><span>Universe Adult Family Home</span> offers senior living solutions designed to meet the needs of today’s active adult population.
                    Our services include skilled nursing care, assisted living, memory care, rehabilitation, hospice, home health care, and respite care. <br /><br />
                    We also offer specialized services such as Alzheimer’s care, dementia care, and behavioral healthcare.<br /><br />
                    </p>
                    <img src={sman} alt='medlogo' className='medlogo' />
            </div>
            <h3>Here's a list of our full services:</h3>
            <div className="services__box">
                <div className="ul__wrap">
                <ul>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Care for Residents needing total care</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with activities of daily living</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with personal care needs</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Medication administration</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Incontinence care</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with feeding</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Care for Residents with catheter or colostomy</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Comprehensive health monitoring</li>
                </ul>
                <ul>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Care for Residents needing total care</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with activities of daily living</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with personal care needs</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Medication administration</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Incontinence care</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Assistance with feeding</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Care for Residents with catheter or colostomy</li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{paddingRight: '0.5rem', color: '#03989E'}} />Comprehensive health monitoring</li>
                </ul>
                </div>
                {/* <div className="sevices__image">
                    pending...
                </div> */}
            </div>
            <div className="believe bl">
                <p>We believe in</p>
                <h3>Love, Care & Support. High quality service. </h3>
                <button className="contactBtn">
                    <Link to='/ContactUs'>Contact Us</Link>
                </button>
            </div>
            <Footer />
        </div>
     );
}
 
export default OurServices;