import classes from './Start.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Start() {
    return (
        <div>
        <section className={classes.start}>
            <div className={classes.start__wrapper}>
                 <h4>There's Always A Place For You</h4>
                 
            </div>
        </section>
        <div className={classes.gapps}>

        </div>
        </div>
    )
};

export default Start;