import { useState, useEffect, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { getSeo } from '../utils/seo';
import { YoutubePlaylist, Breadcrumbs, PlaylistHeader } from '../components/index';
import { useLocation } from 'react-router-dom';
import { stripUrlParam, getPlaylistData } from '../utils/youtube';

const ViewPlaylist: FC<PageProps> = ({ title }) => {
  const pages = [{ name: 'Playlist', href: '', current: true }];
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
    });

    return () => {
      setPlaylist({});
    };
  }, [urlParam]);

  return (
    <>
      <Helmet>{getSeo(title)}</Helmet>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Breadcrumbs pages={pages} />
        {playlist && (
          <>
            <PlaylistHeader playlist={playlist} />
            <YoutubePlaylist data={playlist.items} />
          </>
        )}
      </div>
    </>
  );
};

export default ViewPlaylist;
