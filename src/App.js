import './component.css';
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contactnavbar from './components/contactnavbar';
import Navbar from './components/navbar';
import Home from './components/navbar/home';
import About from './components/navbar/about';
import Contact from './components/navbar/Contact';
import Footer from './components/footer';
import Motor from './components/navbar/motor';
import Office from './components/navbar/offices';
import Caravans from './components/navbar/caravans';
import Containers from './components/navbar/containers';

function App() {
  return (
    <>
      <Router>
        <Contactnavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
           <Route path="/about-us" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/products/motor" element={<Motor />} /> 
          <Route path="/products/office" element={<Office />} /> 
          <Route path="/products/caravans" element={<Caravans />} /> 
          <Route path="/products/containers" element={<Containers />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
