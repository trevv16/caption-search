import React from 'react';
import { Navigation, Footer } from '../index';

export default function AppLayout(props: any) {
  return (
    <>
      <Navigation />
      <div id='content'>{props.children}</div>
      <Footer />
    </>
  );
}
