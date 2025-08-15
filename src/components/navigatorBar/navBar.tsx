import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Fix casing: NavBar.module.css
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>MyApp</div>
        
        {!isOpen && (
            <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
            >
            ☰
            </button>
        )}

            <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar;