import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;
