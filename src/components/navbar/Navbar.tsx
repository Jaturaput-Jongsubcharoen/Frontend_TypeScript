
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>MyApp</div>

        {!isOpen && (
        <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
        >
            ☰
        </button>
        )}

        <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;