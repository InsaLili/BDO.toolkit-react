import * as React from 'react';
import './head.css';
const logo = require('./bdo-logo.png');

class Head extends React.Component {
  render() {
    return (
      <div className="toolkit-head">
        <div className="BDO-logo">
          <img src={logo} alt="logo" />
        </div>
        <h2>BDO toolkit</h2>
      </div>
    );
  }
}

export default Head;