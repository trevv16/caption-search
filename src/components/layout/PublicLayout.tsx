import { Navigation, Footer } from '../index';

export default function PublicLayout(props: any) {
  return (
    <>
      <Navigation />
      <div id='content'>{props.children}</div>
      <Footer />
    </>
  );
}
