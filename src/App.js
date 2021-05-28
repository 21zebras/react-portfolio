import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './Carousel.css';
import NavMenu from './NavMenu';
import WebDev from './WebDev';

export default function App(props)
{
    return (
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    )
}

function Home(props)
{
  return (
    <div className="PageWrapper">
      <NavMenu />
      <WebDev />
    </div>
  )
}