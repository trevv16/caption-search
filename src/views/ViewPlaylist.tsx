import React, { useState, useEffect, FC } from 'react';
import { SeoHelmet } from '../components/index';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { stripUrlParam } from '../utils/youtube';
import ytfps from 'ytfps';

const ViewPlaylist: FC<PageProps> = ({ title, description, image, image_alt }) => {
  const location = useLocation();
  const urlParam = location.search;
  const [playlist, setPlaylist] = useState<any>(null);

  useEffect(() => {
    if (urlParam === undefined) return;

    const tempUrl = stripUrlParam(urlParam, 'url');
    const youtubeUrl = tempUrl.split('?')[1];
    const searchUrl = stripUrlParam(youtubeUrl, 'list');

    if (searchUrl === undefined) return;

    ytfps(searchUrl)
      .then((playlist) => {
        setPlaylist(playlist);
      })
      .catch((err) => {
        throw err;
      });
  }, [urlParam]);

  console.log(playlist);

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
