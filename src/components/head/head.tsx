import * as React from 'react';

const logo = require('./bdo-logo.png');

class Head extends React.Component {
  render() {
    return (
      <div className="">
        <div className="">
          <img src={logo} className="BDO-logo" alt="logo" />
          <h2>BDO toolkit</h2>
        </div>
      </div>
    );
  }
}

export default Head;