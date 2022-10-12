import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import './Careers.css'

const Careers = () => {
    return ( 
        <div>
            <MainNav />
            <div className="about__top">
                <h2>Career Page</h2>
                <div className="title_line" />
                <p>Looking for a career? You might be interested to join us. 
                </p>
            </div>
            <div className="form__cover">
                    <div className="top_write">
                        <div className="topt">
                            <h3>Careers</h3>
                            <p>Looking for a career? If you are a licensed nurse or caregiver, you would possibly be involved to be a part of Universe Family Home. 
                                We are continually on the lookout for certified team of workers who can assist us supply first-rate offerings to our Residents. Apply now.</p>
                        </div>
                        
                    </div>
                    <form>
                        <div className="form__control split_form">
                            <input type='text' placeholder='First Name' />
                            <input type='text' placeholder='Last Name' />
                        </div>
                        <div className="form__control split_form">
                            <input type='text' placeholder='Address' />
                            <input type='text' placeholder='City' />
                        </div>
                        <div className="form__control split_form">
                            <input type='text' placeholder='State' />
                            <input type='text' placeholder='Zip' />
                        </div>
                        <div className="form__control split_form">
                            <input type='text' placeholder='Phone Day' />
                            <input type='text' placeholder='Phone Evening' />
                        </div>
                        <div className="form__control split_form">
                            <input type='email' placeholder='Your E-mail' />
                        </div>
                        <div className="form__control">
                            <label>What License Do You Hold?</label>
                            <select name='License' id='license'>
                                <option value='HHA'>HHA</option>
                                <option value='HHA'>LPN</option>
                                <option value='HHA'>RN</option>
                                <option value='HHA'>None</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control">
                            <label>Are You Over 18?</label>
                            <select name='License' id='license'>
                                <option value='HHA'>Yes</option>
                                <option value='HHA'>No</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control">
                            <label>Do You Have A Driver's License?</label>
                            <select name='License' id='license'>
                                <option value='HHA'>Yes</option>
                                <option value='HHA'>No</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control">
                            <label>Do You Own A Car?</label>
                            <select name='License' id='license'>
                                <option value='HHA'>Yes</option>
                                <option value='HHA'>No</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control">
                            <label>What Shift Would You Prefer</label>
                            <select name='License' id='license'>
                                <option value='HHA'>Days</option>
                                <option value='HHA'>Night</option>
                                <option value='HHA'>PM</option>
                                <option value='HHA'>Live-in</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control">
                        <label>Your Previous Experience:</label>
                            <textarea rows={8} cols={50} />
                        </div>
                        <div className="form__control">
                            <button className="button_c">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
        </div>
     );
}
 
export default Careers;