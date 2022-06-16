import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Grid from "@material-ui/core/Grid";

import {AboutPage, ContactPage, HomePage, PortfolioPage, TimelinePage, SkillsPage } from './pages';
import {Text, AnimatedSubtitle, AnimatedPrompt, Footer, NavBar} from './components'
import "./assets/styles.css";

const fullpageOptions = {
  anchors: ['', 'about', 'skills', 'portfolio', 'contact'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'About', 'Skills', 'Portfolio', 'Contact'],
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
        licenseKey={process.env.REACT_APP_LICENSE_KEY}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div className="section">
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <HomePage/>
                  </Grid>
                  <Grid item>
                    <AnimatedSubtitle onClick={() => fullpageApi.moveSectionDown()}/>
                  </Grid>
                  <Grid item>
                    <AnimatedPrompt onClick={() => fullpageApi.moveSectionDown()}/>
                  </Grid>
                </Grid>
              </div>
              <div className="section">
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 1)} >
                  <Text text={"My name is Alisa Poon, and I am a fullstack developer. Born and raised in San Francisco, I always seek new opportunities to learn and grow. I am excited to work on impactful projects."}/>
                </div>
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 2)}>
                  <TimelinePage/>
                </div>
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 0)}>
                  <AboutPage/>
                </div>
              </div>
              <div className="section">
                <SkillsPage/>
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
