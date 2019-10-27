import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './layout/components/common/nav';
import Footer from './layout/components/common/footer';

import about from './pages/about';
import Home from './pages/home';
import Treatment from './pages/treatments/treatmentsTamplate';
import booking from './pages/booking/booking';
import Contact from './pages/contact';

import './App.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={about}/>
          <Route path="/treatments" component={Treatment}/>
          <Route path="/booking" component={booking}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
