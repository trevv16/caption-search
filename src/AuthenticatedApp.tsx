import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, Error500, Error404 } from './views/index';
import { AppLayout } from './components/index';

export default function PublicApp() {
  const SignOutHandler = () => {
    return (
      <div>
        <Redirect to='/' />
      </div>
    );
  };

  return (
    <div>
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path='/signout' component={SignOutHandler} />

            {/* Admin Routes */}
            {/* <Route exact path='/app' component={DashboardPage} /> */}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route exact path='/' component={HomePage} />

            <Route path='*' component={Error404} />
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}
