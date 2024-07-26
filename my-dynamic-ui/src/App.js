import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shadow the Hedgehog</h1>
        <p>Welcome to the page about Shadow the Hedgehog!</p>
      </header>
      <main className="App-content">
        <section className="content-section">
          <h2>About Shadow</h2>
          <p className="paragraph">Shadow the Hedgehog is a character appearing in Sega's Sonic the Hedgehog series of platform games and its various spin-offs. He is an artificial life form in the shape of a black hedgehog, created by Professor Gerald Robotnik.</p>
          <p className="paragraph">Shadow is immortal, and his physical appearance has not changed since his creation. His powerful skills include Chaos Control, which allows him to warp time and space, and his innate agility makes him a formidable opponent.</p>
          <p className="paragraph">Shadow has a dark and brooding personality, but despite his cold exterior, he has a deep sense of honor and has occasionally worked with Sonic and his allies.</p>
          <p className="paragraph">Throughout the series, Shadow has been both a rival and an ally to Sonic, and his complex backstory and unique abilities have made him a popular character among fans.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>Shadow the Hedgehog 2 - Coming Soon!</p>
      </footer>
    </div>
  );
}

export default App;