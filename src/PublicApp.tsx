import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, SignUpPage, SignInPage, ForgotPage, ResetPasswordPage, Error500, Error404 } from './views/index';
import { Navigation, Footer, PublicLayout } from './components/index';

const SITE_NAME = 'Caption Search';
const SITE_IMG = '';
const SITE_IMG_ALT = '';

const pages = [
  {
    route: '/',
    title: `${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: HomePage
  },
  {
    route: '/signup',
    title: `Sign Up | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: SignUpPage
  },
  {
    route: '/signin',
    title: `Sign In | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: SignInPage
  },
  {
    route: '/forgot',
    title: `Forgot Password | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: ForgotPage
  },
  {
    route: '/reset-password/:resetToken',
    title: `Reset Password | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: ResetPasswordPage
  }
];

export default function PublicApp() {
  return (
    <div>
      <Navigation />
      <Router>
        <PublicLayout>
          <Switch>
            {/* Auth Routes */}
            {pages.map((page: PageProps) => {
              return <Route exact path={page.route} component={page.component} props={page} />;
            })}

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
