import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, Error500, Error404, SignUpPage, SignInPage, ForgotPage, ResetPasswordPage } from './views/index';
import { Navigation, Footer, PublicLayout } from './components/index';

export default function PublicApp() {
  return (
    <div>
      <Navigation />
      <Router>
        <PublicLayout>
          <Switch>
            {/* Auth Routes */}
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/signin' component={SignInPage} />
            <Route exact path='/forgot' component={ForgotPage} />
            <Route exact path='/reset-password/:resetToken' component={ResetPasswordPage} />

            <Route exact path='/' component={HomePage} />

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route path='*' component={Error404} />
          </Switch>
        </PublicLayout>
      </Router>
      <Footer />
    </div>
  );
}
