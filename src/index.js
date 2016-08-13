import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import '.css/style.css';

import App from './components/App'
import About from './components/About'
import Welcome from './components/Welcome'
import Birds from './components/Birds'
import Swapi from './components/Swapi'



render( <Router history={browserHistory}>
          <Route path = '/' component ={App}>
          <IndexRoute component={Welcome}/>
            <Route path = '/about' component ={About}/>
            <Route path = '/birds/:type' component ={Birds}/>
            <Route path = 'swapi/:id' component={Swapi}/>
          </Route>
        </Router>,
        document.getElementById('root')
);
