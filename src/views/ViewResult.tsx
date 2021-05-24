import React, { useState, useEffect, FC } from 'react';
import { SeoHelmet } from '../components/index';
import ReactPlayer from 'react-player/youtube';

type CustomPageProps = {
  path: string;
  title: string;
  description: string;
  image: string;
  image_alt: string;
  component: any;
  location: any;
};

const ViewResult: FC<CustomPageProps> = ({ title, description, image, image_alt, location }) => {
  const [searchUrl, setSearchUrl] = useState(location.state?.url);

  useEffect(() => {
    if (location.state?.url) {
      setSearchUrl(location.state.url);
    } else {
      setSearchUrl('');
    }
  }, [location.state?.url]);

  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'>
          <ReactPlayer url={searchUrl} />
        </div>
      </div>
    </>
  );
};

export default ViewResult;
