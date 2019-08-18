import React from 'react';
import './App.css';
import Nav from './layout/components/nav';
import about from './pages/components/about/about';
import Home from './pages/components/home/home';
import treatments from './pages/components/treatments/treatments';
import booking from './pages/components/booking/booking';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const style = {
  position: "relative",
  margin: "50px auto"
}


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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
