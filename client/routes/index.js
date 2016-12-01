import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../components/app'; // Root layout

import Home from '../containers/home';
import About from '../containers/about';
import Services from '../containers/services';
import MarketPlace from '../containers/marketplace';
import News from '../containers/news';
import Contact from '../containers/contact';

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/home' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/services' component={ Services } />
      <Route path='/marketplace' component={ MarketPlace } />
      <Route path='/news' component={ News } />
      <Route path='/contact' component={ Contact } />
    </Route>
  </Router>
);