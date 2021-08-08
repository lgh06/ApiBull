import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


// https://loadable-components.com/docs/getting-started/

// pages or components
import RequestPage from './pages/RequestPage'
import HomePage from './pages/HomePage'
import ThirdPartyLogin from './pages/ThirdPartyLogin'
import TopicsPage from './pages/TopicsPage'

// dynamically loaded pages or components
import { ErrorBoundary } from './helpers'

const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">RequestPage</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
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
                <RequestPage />
                <ReactQueryDevtools initialIsOpen />
              </Route>
              <Route path="/home">
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
    </QueryClientProvider>
  );
}
