import { Helmet } from 'react-helmet-async';

import { SITE_NAME } from '../Config';

export default function SeoHelmet(props: any): any {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <meta name={`og:${props.title} | ${SITE_NAME}`} property={`og:${SITE_NAME}`} content={props.description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@trevva_' />
      <meta name='twitter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta name='twitter:image' content={props.image} />
      <meta name='twitter:image:alt' content={props.image_alt} />
    </Helmet>
  );
}
