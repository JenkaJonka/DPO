import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../pages/about';
import Products from '../pages/products';
import Services from '../pages/services';
import Portfolio from '../pages/portfolio';
import FAQ from '../pages/faq';
import Contacts from '../pages/contacts';
import styles from './Nav.module.css';
import logo from '../img/logo.svg';
import calculation from '../img/calculation.svg';
import request from '../img/measering.svg';
import Home from '../pages/home';


const Nav = () => {
  return (
    <Router>
      <div>
        <nav className={`navbar ${styles.navbar}`}>
          <ul>
            <li><Link to="/" className={styles.navLink}><img className={styles.logo} src={logo} alt='home' ></img></Link></li>
            <li><Link to="/Services" className={styles.navLink}>Services</Link></li>
            <li><Link to="/Products" className={styles.navLink}>Products</Link></li>
            <li><Link to="/About" className={styles.navLink}>About us</Link></li>
            <li><Link to="/Portfolio" className={styles.navLink}>Portfolio</Link></li>
            <li><Link to="/FAQ" className={styles.navLink}>FAQ</Link></li>
            <li><Link to="/Contacts" className={styles.navLink}>Contacts</Link></li>
            <li><Link className={styles.btn}><img className={styles.svg} src={request} alt='img'></img> Make request</Link></li>
            <li><Link className={styles.btn2}><img className={styles.svg} src={calculation} alt='img'></img> Calculation</Link></li>
          </ul>
        </nav>

        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Nav;