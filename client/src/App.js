import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import {AboutPage, ContactPage, HomePage, PortfolioPage} from './pages';
import { Footer, NavBar } from './components'
import "./assets/styles.css";

const fullpageOptions = {
  anchors: ['', 'portfolio','about','contact'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'Portfolio', 'About', 'Contact'],
  scrollOverflow: true,
  slidesNavigation: true,
  slidesNavPosition: 'top',
  lockAnchors: true,
};

const App = fullpageProps => (
  <div>
    <NavBar/>
    <ReactFullpage
      {...fullpageProps}
      {...fullpageOptions}
      licenseKey={'your key'}
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
    />
    <Footer/>
  </div>
);

export default App;
