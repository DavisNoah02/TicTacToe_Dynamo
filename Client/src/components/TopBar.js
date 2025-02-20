import React from 'react';
import '../Styles/Header.css';	

function Header() {
  return (
    <header className="header" style={{ width: '100vw', textAlign: 'center', top: 0, zIndex: 1 }}>
      <h1>Tic Tac Toe Minimax</h1>
    </header>
  );
}

export default Header;
