import React, { FC } from 'react';
import { SeoHelmet } from '../components/index';

const ViewPlaylist: FC<PageProps> = ({ title, description, image, image_alt }) => {
  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'></div>
      </div>
    </>
  );
};

export default ViewPlaylist;
