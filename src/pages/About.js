import './About.css'
import MainNav from '../components/MainNav';
import About from '../components/About';
import Footer from '../components/Footer';
import Start from '../components/Start';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return ( 
        <section className="about">
            <MainNav />
            <div className="about__top">
                <h2>About Us</h2>
                <div className="title_line" />
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Ad, dicta?
                </p>
            </div>
            <div className="flex__container">
                <div className="flex__wrap">
                    <p>
                    Our <span>Adult Family Home</span> in <span>Mandrake Road, Madison</span> combines compassionate 
                    care staff, uplifting services, secure, homely facility. <br /><br />
                    When living alone is no longer an option for your loved one, 
                    why not let them stay in a place where they would feel at home? <br/>
                    Let your loved one can join <span>Universe Addult Family Home</span>!
                    </p>
                </div>

                <div className="flex__wrap">
                    <h4>
                        What is <span>Universe Adult Home?</span>
                    </h4>
                </div>
           </div>
            <div className="mission">
                <div className="mission__flex">
                    <h3>Our Mission</h3>
                    <p>
                    Our focus is making adequate care, assistance, love and support to seniors. Also, a safe, beautiful, loving and serene home enabling residents to be more carefree
                    , while enjpoying the opportumity to engage in activities and enjoy their golden years.<br />
                     </p>
                </div>
                <div className="mission__flex">
                <h3>Our Vision</h3>
                    <p>We aim to be a go-to adult family home for those who seek to extend their networks of care for the 
                        benefit of the elderly and special needs population in the community.</p>
                </div>
            </div>
            <div className="believe">
                <p>We believe in</p>
                <h3>Love, Care & Support. High quality service. </h3>
                <button className="contactBtn">
                    <Link to='/ContactUs'>Contact Us</Link>
                </button>
            </div>
            <Footer />
        </section>
     );
}
 
export default AboutUs;