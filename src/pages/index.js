import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import Nav from '../layout/common/nav/nav';


// ReactDOM.render(<App />, document.getElementById('root'));
export default () => (
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    )