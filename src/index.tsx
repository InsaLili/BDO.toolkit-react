import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Navigation from './components/nav';
// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from '@uifabric/icons';
 //import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';


loadTheme({
    palette: {
      'themePrimary': '#ed1a3b',
      'themeLighterAlt': '#fef4f5',
      'themeLighter': '#fde8eb',
      'themeLight': '#fbd1d8',
      'themeTertiary': '#f89fac',
      'themeSecondary': '#ef314d',
      'themeDarkAlt': '#dc1130',
      'themeDark': '#ab0d25',
      'themeDarker': '#860a1d',
      'neutralLighterAlt': '#e9e9ec',
      'neutralLighter': '#e5e5e9',
      'neutralLight': '#dadae0',
      'neutralQuaternaryAlt': '#cacad2',
      'neutralQuaternary': '#c0c0ca',
      'neutralTertiaryAlt': '#b7b7c3',
      'neutralTertiary': '#d6d6d6',
      'neutralSecondary': '#474747',
      'neutralPrimaryAlt': '#2e2e2e',
      'neutralPrimary': '#333333',
      'neutralDark': '#242424',
      'black': '#1c1c1c',
      'white': '#f1f1f3'
    }
});


 // Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

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