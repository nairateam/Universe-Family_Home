import MainNav from "../components/MainNav"
import Footer from "../components/Footer";


const Schedule = () => {
    return (
        <div>
            <MainNav />
            <div className="about__top">
                <h2>Scedule An Appointment</h2>
                <div className="title_line" />
                <p>For accommodations, you can schedule a meeting with one of our qualified representatives. 
                </p>
            </div>
            <div className="form__cover">
                    <div className="top_write">
                        <div className="topt">
                            <h3>Appointment Schedule</h3>
                            <p>For accommodations, you can schedule a meeting with one of our qualified representatives at Universe Adult Family Home. Kindly fill out the form below to specify your preferred appointment schedule..</p>
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
                        <div className="form__control">
                            <label>HOW DO YOU PREFER TO BE CONTACTED?</label>
                            <select name='License' id='license'>
                                <option value='Phone'>PHONE</option>
                                <option value='Fax'>FAX</option>
                                <option value='Email'>E-MAIL</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control split_form">
                            <input type='email' placeholder='Your E-mail' />
                        </div>
                        <div className="form__control split_form">
                            <input type='text' placeholder='Phone Number' />
                            <input type='text' placeholder='Fax' />
                        </div>
                        <div className="form__control">
                            <label>BEST TIME TO CALL?</label>
                            <select name='License' id='license'>
                                <option value='select'>--Please Male Selection--</option>
                                <option value='anytime'>Anytime</option>
                                <option value='Morning At Home'>Morning At Home</option>
                                <option value='Morning At Work'>Morning At Work</option>
                                <option value='Afternoon At Home'>Afternoon At Home</option>
                                <option value='Afternoon At WOrk'>Afternoon At Work</option>
                                <option value='Evening At Home'>Evening At Home</option>
                                <option value='Evening At Work'>Evening At Work</option>
                            </select>
                            {/* <input type='text' placeholder='City' /> */}
                        </div>
                        <div className="form__control split_form">
                            <input type='date' placeholder='Preferred Date' />
                            <input type='text' placeholder='Prefered Time' />
                        </div>
                        
                        <div className="form__control">
                        <label>COMMENT:</label>
                            <textarea rows={8} cols={50} />
                        </div>
                        <div className="form__control">
                            <button className="button_c">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
        </div>
    )
}

export default Schedule;