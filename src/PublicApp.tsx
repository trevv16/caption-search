import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SITE_NAME, SITE_IMG, SITE_IMG_ALT } from './Config';
import { HomePage, ViewResult, Error500, Error404 } from './views/index';
import { PublicLayout } from './components/index';

const pages = [
  {
    path: '/',
    title: `${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: HomePage
  },
  {
    path: '/results',
    title: `Results | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: ViewResult
  }
  // {
  //   path: '/signup',
  //   title: `Sign Up | ${SITE_NAME}`,
  //   description: '',
  //   image: SITE_IMG,
  //   image_alt: SITE_IMG_ALT,
  //   component: SignUpPage
  // },
  // {
  //   path: '/signin',
  //   title: `Sign In | ${SITE_NAME}`,
  //   description: '',
  //   image: SITE_IMG,
  //   image_alt: SITE_IMG_ALT,
  //   component: SignInPage
  // },
  // {
  //   path: '/forgot',
  //   title: `Forgot Password | ${SITE_NAME}`,
  //   description: '',
  //   image: SITE_IMG,
  //   image_alt: SITE_IMG_ALT,
  //   component: ForgotPage
  // },
  // {
  //   path: '/reset-password/:resetToken',
  //   title: `Reset Password | ${SITE_NAME}`,
  //   description: '',
  //   image: SITE_IMG,
  //   image_alt: SITE_IMG_ALT,
  //   component: ResetPasswordPage
  // }
];

export default function PublicApp() {
  return (
    <div>
      <Router>
        <PublicLayout>
          <Switch>
            {/* Auth Routes */}
            {pages.map((page: PageProps) => (
              <Route key={nanoid()} exact {...page} />
            ))}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route path='*' component={Error404} />
          </Switch>
        </PublicLayout>
      </Router>
    </div>
  );
}
