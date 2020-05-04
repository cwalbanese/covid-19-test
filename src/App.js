import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import { Switch, Route } from 'react-router-dom';
import Results from './components/Results/Results.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="page-container">
      <Nav />
      <About />
      <Switch>
        <Route
          path={'/:state/'}
          render={(routerProps) => {
            return <Results match={routerProps.match} />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
