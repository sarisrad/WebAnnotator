import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/home/App';
import Home from './views/home/Body/BodyHome';
import About from './views/home/Body/BodyAbout';
import Media from './views/home/Body/BodyMedia';
import Publications from './views/home/Body/BodyPublications';
import Contact from './views/home/Body/BodyContact';
import LiveDemo from './views/home/Body/BodyLiveDemo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

function registerUser() {
    var form = document.getElementById(("user_registration_form"));
    var data = JSON.stringify(form.serializeArray());
    console.log(data);
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="media" component={Media}/>
          <Route path="publications" component={Publications}/>
          <Route path="contact" component={Contact}/>
          <Route path="livedemo" component={LiveDemo}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
