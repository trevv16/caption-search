import { Footer } from '../index';

export default function PublicLayout(props: any) {
  return (
    <>
      <div id='content'>{props.children}</div>
      <Footer />
    </>
  );
}
