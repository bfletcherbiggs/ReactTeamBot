import React from 'react';
import TeamCreationContainer from '../TeamCreation/TeamCreationContainer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Roster Bots</h1>
        <h2>Code Challenge</h2>
      </div>
      <TeamCreationContainer />
    </div>
  );
};

export default HomePage;
