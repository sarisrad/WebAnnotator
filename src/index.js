import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/home/App';
import Home from './views/home/Body/BodyHome';
import Contact from './views/home/Body/BodyContact';
import StartWorking from './views/home/Body/BodyStartWorking';
import ManageManuscripts from './views/home/Body/BodyManageManuScripts';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="contact" component={Contact}/>
          <Route path="startworking" component={StartWorking}/>
          <Route path="managemanuscripts" component={ManageManuscripts}/>
      </Route>
    </Router>,
    document.getElementById('root')
);
