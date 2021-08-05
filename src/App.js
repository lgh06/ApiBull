import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// https://loadable-components.com/docs/getting-started/

// pages or components
import HomePage from './pages/HomePage'
import ThirdPartyLogin from './pages/ThirdPartyLogin'
import TopicsPage from './pages/TopicsPage'

// dynamically loaded pages or components
import { ErrorBoundary } from './helpers'


export default function App() {
  return (
    <Router basename="/web-prompter">
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/3login">Login</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/3login">
              <ThirdPartyLogin />
            </Route>
            <Route path="/topics">
              <TopicsPage />
            </Route>
            <Route path="*">
              <>404 error, not found</>
            </Route>
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}
