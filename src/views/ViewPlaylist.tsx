import React, { useState, useEffect, FC } from 'react';
import { SeoHelmet, YoutubePlaylist } from '../components/index';
import { useLocation } from 'react-router-dom';
import { stripUrlParam, getPlaylistData } from '../utils/youtube';

// import 'react-youtube-playlist/dist/styles';

const ViewPlaylist: FC<PageProps> = ({ title, description, image, image_alt }) => {
  const location = useLocation();
  const urlParam = location.search;
  const [playlist, setPlaylist] = useState<any>(null);

  useEffect(() => {
    if (urlParam === undefined) return;

    const tempUrl = stripUrlParam(urlParam, 'url');
    const youtubeUrl = tempUrl.split('?')[1];
    const id = stripUrlParam(youtubeUrl, 'list');

    if (id === undefined || id === null) return;
    getPlaylistData(id).then((result) => {
      if (result === undefined || result === null) return;
      const playlistData = result?.data.body;
      setPlaylist(playlistData);

      // const channelData = getChannelInfo(playlistData.channelId);

      // console.log('Channel:', channelData);
    });

    return () => {
      setPlaylist({});
    };
  }, [urlParam]);

  const Header = () => {
    return (
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>{playlist.channelTitle}</h2>
            <a href={playlist.playlistUrl} className=''>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                {playlist.playlistTitle}
              </p>
            </a>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>Playlist/Channel Description</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        {playlist && playlist !== null && (
          <>
            <Header />
            <YoutubePlaylist data={playlist.items} />
            {/* <div className='max-w-3xl mx-auto my-80'>
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default ViewPlaylist;
