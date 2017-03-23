import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/home/App';
import Home from './views/home/Body/BodyHome';
import About from './views/home/Body/BodyAbout';
import Media from './views/home/Body/BodyMedia';
import Publications from './views/home/Body/BodyPublications';
import Contact from './views/home/Body/BodyContact';
import LiveDemo from './views/home/Body/BodyLiveDemo';
import StartWorking from './views/home/Body/BodyStartWorking';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="media" component={Media}/>
          <Route path="publications" component={Publications}/>
          <Route path="contact" component={Contact}/>
          <Route path="livedemo" component={LiveDemo}/>
          <Route path="startworking" component={StartWorking}/>
      </Route>
    </Router>,
    document.getElementById('root')
);
