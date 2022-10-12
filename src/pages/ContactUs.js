import './ContactUs.css'
import { Link } from 'react-router-dom';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

const ContactUs = () => {
    return ( 
        <div>
            <section className="contact_us">
                <MainNav />
                <div className="about__top">
                <h2>Contact Us</h2>
                <div className="title_line" />
                <p>Let's Start A Conversation. Call Our Help Line Or Reach Us Via The Form
                </p>
                </div>
                <div className="form__cover">
                    <div className="top_write">
                        <div className="topt">
                            <h3>Reach Us</h3>
                            <p>We're open 24/7</p>
                            <p>4006 Mandrake Road, Madison WI 53704</p>
                        </div>
                        <div className="topt">
                            <h3>Call Us</h3>
                            <p>608-772-2264</p>
                            <p>universeafh@gmail.com</p>
                        </div>
                        
                    </div>
                    <form>
                        <div className="form__control">
                            <input type='text' placeholder='Full Name' />
                        </div>
                        <div className="form__control">
                            <input type='email' placeholder='Your E-mail' />
                        </div>
                        <div className="form__control">
                            <textarea rows={8} cols={50} />
                        </div>
                        <div className="form__control">
                            <button className="button_c">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="believe">
                        <p>We believe in</p>
                        <h3>Love, Care & Support. High quality service. </h3>
                        <button className="contactBtn">
                            <Link to='/AboutUs'>About Us</Link>
                        </button>
                    </div>
                    <Footer />
            </section>
        </div>
     );
}
 
export default ContactUs;

