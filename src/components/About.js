import classes from './About.module.css';
import sman from '../IMAGES/sman.jpg';

function About() {
    return (
        <section className={classes.about}>
            {/* <h3>About Us</h3>
            <p>We offer the complete package of senior care 
                services that are offered in an adult family home.
            </p> */}
           <div className={classes.flex__container}>
                <div className={classes.flex__wrap}>
                    <p>
                    Our <span>Adult Family Home</span> in <span>Mandrake Road, Madison</span> combines compassionate 
                    care staff, uplifting services, secure, homely facility. <br /><br />
                    When living alone is no longer an option for your loved one, 
                    why not let them stay in a place where they would feel at home? <br/>
                    Let your loved one join <span>Universe Addult Family Home</span>!
                    </p>
                </div>

                <div className={classes.flex__wrap}>
                    <h4>
                        What is <span>Universe Adult Home?</span>
                    </h4>
                    <p>Learn More...</p>
                    <img src={sman} alt='medlogo' className={classes.medlogo} />
                </div>
           </div>
        </section>
    )
}

export default About;