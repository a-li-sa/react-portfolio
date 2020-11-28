import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {AboutPage, ContactPage, PortfolioPage} from './pages';

const fullpageOptions = {
  anchors: ['', 'portfolio','about','contact'],
  navigation: true,
};

const App = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  {...fullpageOptions}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <div className="section">
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
