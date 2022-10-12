import classes from './Hero.module.css';
import heroImg from '../IMAGES/CareHero.jpg'
// import heroExtra from '../IMAGES/lovvc.png'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section>
            <div className={classes.hero__container}>
                <div className={classes.hero__item}>
                    <div className={classes.vector}>
                    <motion.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5, duration: 1.5}}
                    >We provide home care services for <span>Seniors</span></motion.h2>
                    <p>Want to age in place? Learn about home care services that can help you maintain your 
                        independence and stay at home for longer.
                    </p>
                    <div className={classes.hero_btn_wrap}>
                        <motion.button
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 1, duration: .5}}
                         className={classes.hero_btn}> <FontAwesomeIcon icon={faInfo} size='1x' style={{marginRight: '0.4rem', color: 'orange'}} /> <Link to='/Schedule' style={{color: '#FFF'}}>Schedule Appointment</Link></motion.button>
                        {/* <button className={classes.hero_btns}>  About Us</button> */}
                    </div>
                    </div>
                    {/* <div className={classes.form__control}>
                        <form>
                            <div className={classes.input__wrap}>
                                <label>Full Name:</label>
                                <input type='text' placeholder='Full Name' />
                            </div>
                            <div className={classes.input__wrap}>
                                <label>Phone Number:</label>
                                <input type='tel' placeholder='Phone Number' />
                            </div>
                            <div className={classes.input__wrap}>
                                <label>Email:</label>
                                <input type='email' placeholder='Email Address' />
                            </div>
                            <button type='submit' className={classes.hero__btn}>Enquiry</button>
                        </form>
                    </div> */}
                </div>
                <div className={classes.hero__item2}>
                    
                </div>
                <div className={classes.hero__item22}>
                    {/* <img src={heroExtra} alt='' className={heroExtra} /> */}
                    <img src={heroImg} alt="Universe" className={classes.bonus} />
                </div>
            </div>
        </section>
    )
};

export default Hero;