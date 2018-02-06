import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AsyncLoader from "./AsyncLoader";

import trialCars from './components/trialCars';
import home from './components/home';

import config from '../config/index.js';
import store from './model';

export default class BasicExample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router basename={config.publicPath}>
            <div>
              <ul>
                <li><Link to="/home">Home122</Link></li>
                <li><Link to="/trialCars">trialCars</Link></li>
                <li><Link to="/counter">Counter</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={home}/>
              <Route exact path="/trialCars" component={trialCars}/>
              <Route path="/counter" render={() => <AsyncLoader path="Counter.js"/>}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

