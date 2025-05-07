import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <h1 style={{ color: '#333', fontSize: '24px' }}>
        <span style={{ color: 'white' }}>Furn</span>
        <span style={{ color: '#fff', backgroundColor: '#333', padding: '2px 4px', borderRadius: '4px' }}>X</span>
      </h1>
      <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      </div>
      
    </nav>
  );
};

export default Header;