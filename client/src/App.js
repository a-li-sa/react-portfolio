import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {AboutPage, ContactPage, HomePage, PortfolioPage} from './pages';
import "./styles.css";

const fullpageOptions = {
  anchors: ['', 'portfolio','about','contact'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['home', 'portfolio', 'about', 'contact'],
  showActiveTooltip: true,
  scrollOverflow: true,
};

const App = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  {...fullpageOptions}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <div className="section">
          <HomePage/>
        </div>
        <div className="section">
          <PortfolioPage/>
        </div>
        <div className="section">
          <AboutPage/>
        </div>
        <div className="section">
          <ContactPage/>
        </div>
      </div>
    );
  }}
/>);

export default App;
