import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Navigation from './components/nav';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


class Homepage extends React.Component<any, any> {
  render(){
    return(
      <div>
        <Navigation />
      </div>
    );
  }
}
ReactDOM.render(
  <Homepage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
