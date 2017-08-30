import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Link, HashRouter, Route, Switch} from 'react-router-dom'
import {IndexRoute} from 'react-router'

import Home from './Home'
import Bio from './Bio'
import Privacy from './Privacy'
import Location from './Location'

let DefaultRoute = Router.DefaultRoute;
let hashHistory = Router.hashHistory;

ReactDOM.render((
  <Router history={hashHistory}>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/location" component={Location} />
      <Route path="/privacy" component={Privacy} />
    </App>
  </Router>),
  document.getElementById("container")
  );
