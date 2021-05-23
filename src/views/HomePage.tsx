import React, { FC } from 'react';
import { SeoHelmet } from '../components/index';

const HomePage: FC<PageProps> = ({ title, description, image, image_alt }) => {
  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div></div>
    </>
  );
};

export default HomePage;
