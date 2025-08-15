import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">MyApp</div>

        {!isOpen && (
          <button
            className="toggleButton"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        <ul className={`navLinks ${isOpen ? 'show' : ''}`}>
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