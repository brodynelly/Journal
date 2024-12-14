import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import styles.css

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="tab">
        <span className="tab-text">Journal Entries</span>
      </Link>
      <Link to="/entries" className="tab">
        <span className="tab-text">Previous Entries</span>
      </Link>
    </div>
  );
};

export default Navbar;
