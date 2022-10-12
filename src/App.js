import Home from './Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import OurServices from './pages/OurServices';
import Careers from './pages/Careers';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/OurServices' element={<OurServices />} />
      <Route path='/Careers' element={<Careers />} />
      <Route path='/Schedule' element={<Schedule />} />
    </Routes>
    // <div>
    //   <Home />
    // </div>
  );
}

export default App;
