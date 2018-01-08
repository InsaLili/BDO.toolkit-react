import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ComponentsLists from './components-lists';
import styles from './components-router-styles';

const ComponentRouter = () => (
  <Router>
    <div style={styles.router}>
      <div style={styles.nav}>
        <ul style={styles.list}>
          {ComponentsLists.map((route,index) => (
              <li><Link to={route.path}>{route.name}</Link></li>
            ))
          }
        </ul>
      </div>

      <div style={styles.main}>
        {ComponentsLists.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
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
)

export default ComponentRouter