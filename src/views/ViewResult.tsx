import React, { useState, useEffect, FC } from 'react';
import { SeoHelmet, VideoCaptions } from '../components/index';
import ReactPlayer from 'react-player/lazy';
import { useLocation } from 'react-router-dom';
import { stripUrlParam } from '../utils/youtube';

/**
 * https://www.youtube.com/watch?v=yHdLoVpzdcg
 * https://www.youtube.com/watch?v=SXKPBh12WbE&list=PLhKmHfWT5YmKq8M3lrpGBaUDRToxnUAJF&index=1
 *
 * https://www.youtube.com/playlist?list=PLhKmHfWT5YmKq8M3lrpGBaUDRToxnUAJF
 */

const ViewResult: FC<PageProps> = ({ title, description, image, image_alt }) => {
  const location = useLocation();
  const urlParam = location.search;
  const [searchUrl, setSearchUrl] = useState('');

  useEffect(() => {
    if (urlParam === undefined) return;

    const url = stripUrlParam(urlParam, 'url');

    if (url) {
      setSearchUrl(url);
    }
  }, [urlParam]);

  const captionData = [
    {
      start: '8.208',
      dur: '3.459',
      text: 'And in a year that tested everyone around the world'
    },
    {
      start: '8.208',
      dur: '3.459',
      text: 'And in a year that tested everyone around the world'
    },
    {
      start: '8.208',
      dur: '3.459',
      text: 'And in a year that tested everyone around the world'
    },
    {
      start: '8.208',
      dur: '3.459',
      text: 'And in a year that tested everyone around the world'
    }
  ];

  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto mt-56 mb-24'>
          <ReactPlayer url={searchUrl} width='100%' />
        </div>
        <VideoCaptions captions={captionData} />
      </div>
    </>
  );
};

export default ViewResult;
