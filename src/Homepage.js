import React from 'react';
import './Homepage.css';
import Header from './Header';
import IntroWork from './IntroWork';

function Homepage() {
  console.log('Homepage rendered');

  return (
    <div className="background">
      <Header />
      <IntroWork />
    </div>
  );
}

export default Homepage;
