import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import {AboutPage, ContactPage, PortfolioPage} from './pages';

const fullpageOptions = {
  anchors: ['about','portfolio','contact'],
  navigation: true,
};

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <div className="section">
          <AboutPage/>
        </div>
        <div className="section">
          <PortfolioPage/>
        </div>
        <div className="section">
          <ContactPage/>
        </div>
      </div>
    );
  }}
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('root'));
