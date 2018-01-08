import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import Head from './head/head';
import ComponentsLists from './components-lists';
import './components-router.css'

const ComponentRouter = () => (
    <div className="sidebar">
      <Router>
        <div className="router">
          <div className="nav">
            <Head/>
            <ul>
                {ComponentsLists.map((route,index) => (
                    <li key={route.name}><Link to={route.path}>{route.name}</Link></li>
                ))
                }
            </ul>
          </div>
          <div className="mainPage">
            {ComponentsLists.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
          </div>
        </div>
      </Router>
    </div>
);

export default ComponentRouter