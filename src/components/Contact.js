import classes from './Contact.module.css';
// import ContLog from '../IMAGES/contactlog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section className={classes.contact}>
            <div className={classes.flex__container}>
            <div className="top_write">
                        <div className="topt">
                            <h3>Reach Us</h3>
                            <p>We're open 24/7</p>
                            <p><FontAwesomeIcon icon={faLocationDot} style={{paddingRight: '0.2rem'}} />4006 Mandrake Road, Madison WI 53704</p>
                        </div>
                        <div className="topt">
                            <h3>Call Us</h3>
                            <p><FontAwesomeIcon icon={faAddressBook} style={{paddingRight: '0.2rem'}} />608-772-2264</p>
                            <p><FontAwesomeIcon icon={faEnvelope} style={{paddingRight: '0.2rem'}} /> universeafh@gmail.com</p>
                        </div>
                        </div>
            <form>
                <div className={classes.form__cap}>
                    <h4>Let's Start A Conversation <FontAwesomeIcon icon={faAddressBook} /></h4>
                </div>
                        <div className={classes.form__control}>
                            <input type='text' placeholder='Full Name' />
                        </div>
                        <div className={classes.form__control}>
                            <input type='email' placeholder='Your E-mail' />
                        </div>
                        <div className={classes.form__control}>
                            <textarea rows={8} cols={50} />
                        </div>
                        <div className={classes.form__control}>
                            <button className={classes.button_c}>Submit</button>
                        </div>

                    </form>
            </div>
        </section>
    )
}

export default Contact;