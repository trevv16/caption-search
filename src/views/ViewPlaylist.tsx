import { useState, useEffect, FC } from 'react';
import { SeoHelmet, YoutubePlaylist, Breadcrumbs, PlaylistHeader } from '../components/index';
import { useLocation } from 'react-router-dom';
import { stripUrlParam, getPlaylistData } from '../utils/youtube';

const ViewPlaylist: FC<PageProps> = ({ title, description, image, image_alt }) => {
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
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
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
