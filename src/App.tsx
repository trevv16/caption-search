import React, { useState, useEffect } from 'react';
import PublicApp from './PublicApp';
import AuthenticatedApp from './AuthenticatedApp';

export default function App(props: any) {
  const [checkLoggedIn, setCheckLoggedIn] = useState(false);
  const { isLoggedIn } = props;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setCheckLoggedIn(true);
    } else {
      setCheckLoggedIn(false);
    }
  }, [isLoggedIn]);

  if (checkLoggedIn === false && !localStorage.getItem('token')) {
    return <PublicApp />;
  }

  return <AuthenticatedApp />;
}
