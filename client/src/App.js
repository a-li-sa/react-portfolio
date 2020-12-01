import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Grid from "@material-ui/core/Grid";

import {AboutPage, ContactPage, HomePage, PortfolioPage} from './pages';
import {Text, AnimatedSubtitle, Footer, NavBar} from './components'
import "./assets/styles.css";
import Typography from "@material-ui/core/Typography";

const fullpageOptions = {
  anchors: ['', 'about', 'portfolio', 'contact'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'About', 'Portfolio', 'Contact'],
  scrollOverflow: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  showActiveTooltip: true,
  animateAnchor: false,
};

const App = fullpageProps => {
  return (
    <div>
      <ReactFullpage
        {...fullpageProps}
        {...fullpageOptions}
        licenseKey={'your key'}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div className="section">
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <HomePage/>
                    <AnimatedSubtitle onClick={() => fullpageApi.moveSectionDown()}/>
                  </Grid>
                </Grid>
              </div>
              <div className="section">
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 1)} >
                  <Text text={"My name is Alisa Poon, and I am a fullstack developer. Born and raised in San Francisco but constantly changing, I always seek new opportunities to learn and grow. I am excited to be a part of projects that will enhance productivity and creativity."}/>
                </div>
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 0)}>
                  <AboutPage/>
                </div>
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
      />
      <NavBar />
      <Footer/>
    </div>
  );
}

export default App;
