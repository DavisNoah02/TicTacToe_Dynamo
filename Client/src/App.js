import React from 'react';
import Header from './components/TopBar'; 
import Footer from './components/Footer';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <Game />
      {/* <Footer /> */}

  
    </div>
  );
}

export default App;