import classes from './Services.module.css';
// import medlogo from '../IMAGES/medlogo.png';
import { motion } from 'framer-motion';
import Missions from '../IMAGES/mission2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingWithCane } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faUserNurse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Services() {
    return (

        <section className={classes.services}>
            {/* <h3>About Us</h3>
            <p>We offer the complete package of senior care 
                services that are offered in an adult family home.
            </p> */}
           <div className={classes.flex__container}>
                <div className={classes.flex__wrap}>
                    <h4>
                        Our Services Can <span>Help You</span>
                    </h4>
                </div>

                <div className={classes.flex__wraps}>
                    {/* <div className={classes.services__wrap}> */}
                        <p>
                            While it may be hard to accept, most of us will require some help assitance after 
                            the age of 65. You may be used to handling everything yourself , dividing duties with
                             your spouse or relying on family members for minor help around the home.<br/><br/>
                            
                            If the idea is seeking help for your loved ones, 
                            Have the peace of mind that he/she is treated like a family here at Universe Adult Family Home.
                            
                        </p>
                    {/* </div> */}
                </div>
           </div>
           <div>
           <div className={classes.services__wrap}>
                    <motion.div 
                        whileHover={{scale: 1.1}}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                        <FontAwesomeIcon icon={faCapsules} size='3x' color='#03989E' />
                        <h5>Medication Administration</h5>
                        <p>
                        We have developed a program to effectively 
                        carry out medication administration.
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #03989E', color: '#03989E'}}><Link to='/OurServices'>Learn More</Link></button>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.1 }}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                    <FontAwesomeIcon icon={faBowlFood} size='3x' color='#FFF' />
                        <h5 style={{color: '#FFF'}}>Feeding</h5>
                        <p style={{color: '#FFF'}}>
                        We offer a good selection of food carefully 
                        chosen so that they are delicious and nutritious..
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #FFF', color: '#FFF'}}><Link to='/OurServices' style={{color: '#FFF'}}>Learn More</Link></button>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.1}}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                    <FontAwesomeIcon icon={faPersonWalkingWithCane} size='3x' color='#03989E' />
                        <h5>Incontinent Care</h5>
                        <p>
                        We will always be there to provide sensitive and 
                        compassionate care to our Residents entrusted to us.
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #03989E', color: '#03989E'}}><Link to='/OurServices'>Learn More</Link></button>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.1}}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                    <FontAwesomeIcon icon={faUserNurse} size='3x' color='#03989E' />
                        <h5>Nursing</h5>
                        <p>
                        Receive amazing and steadfast care with Universe Adult Family Home.
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #03989E', color: '#03989E'}}><Link to='/OurServices'>Learn More</Link></button>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.1}}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                    <FontAwesomeIcon icon={faMusic} size='3x' color='#03989E' />
                        <h5>Recreational Activities</h5>
                        <p>
                            You would never feel bored around us, there's always fun and something to do.
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #03989E', color: '#03989E'}}><Link to='/OurServices'>Learn More</Link></button>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.1}}
                        transition={{delay: 0.1, duration: 0.2}}
                    className={classes.service__item}>
                    <FontAwesomeIcon icon={faBed} size='3x' color='#03989E' />
                        <h5>24/7 Care</h5>
                        <p>
                        There's always something to get you in the mood of fun.
                        </p>
                        <button className={classes.more_info} style={{border: '1.4px solid #03989E', color: '#03989E'}}><Link to='/OurServices'>Learn More</Link></button>
                    </motion.div>
            </div>
           </div>

            <div className={classes.mission}>
                <div className={classes.mission__wrap}>
                    <div className={classes.mission__item}>
                    <h4>Discover And Experience <span>The Right</span> Family Home For You</h4>
                        <p>Our mission is to provide a loving and compassionate home environment
                                with the utmost level of professional care to our Residents.
                        </p>
                        <div className={classes.heart_wrap}>
                            <motion.span
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.1, duration: 0.2}}
                            >
                                <FontAwesomeIcon icon={faHeart} size='1x' color='orange' />
                                <p>Excellent Protection</p>
                            </motion.span>
                            <motion.span
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.4, duration: 0.2}}
                            >
                                <FontAwesomeIcon icon={faHeart} size='1x' color='orange' />
                                <p>High Savings Potential</p>
                            </motion.span>
                            <motion.span
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.6, duration: 0.2}}
                            >
                                <FontAwesomeIcon icon={faHeart} size='1x' color='orange' />
                                <p>Maximum High Savings</p>
                            </motion.span>
                            <button className={classes.more_con}> <Link to='/ContactUs' style={{color: '#03989E'}}>Contact Us</Link></button>
                        </div>
                    </div>
                    <div className={classes.mission__item}>
                            <img src={Missions} className={classes.mis_img} alt='banner' />
                    </div> 
                </div>
                </div>


        </section>
    )
}

export default Services;