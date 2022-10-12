import MainNav from './components/MainNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Start from './components/Start';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Review from './components/Review';

const Home = () => {
    return ( 
        <div>
        <MainNav />
        <Hero />
        <About />
        <Services />
        <Review />
        <Start />
        <div className="believe">
                        <p>We believe in</p>
                        <h3>Love, Care & Support. High quality service. </h3>
                        <button className="contactBtn">
                            <Link to='/AboutUs'>About Us</Link>
                        </button>
                    </div>
        <Contact />
        <Footer />
      </div>
     );
}
 
export default Home;