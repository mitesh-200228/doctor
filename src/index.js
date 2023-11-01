import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Countdown from 'react-countdown';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <App />;
  } else {
    return <div id="container">
      <span className="fancy">{days} Days: {hours} HR: {minutes} MIN: {seconds} SEC Remaining</span>
    </div>;
  }
};


root.render(
  <Countdown
    date={Date.parse("October 31, 2023") + 77000000}
    renderer={renderer}
  />
);