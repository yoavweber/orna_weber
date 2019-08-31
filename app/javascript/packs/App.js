import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './layout/components/common/nav';
import about from './pages/components/about/about';
import Home from './pages/components/home/home';
import treatments from './pages/components/treatments/treatments';
import booking from './pages/components/booking/booking';
import Contact from './pages/components/contact/contact';

import './App.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={about}/>
          <Route path="/treatment" component={treatments}/>
          <Route path="/booking" component={booking}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
