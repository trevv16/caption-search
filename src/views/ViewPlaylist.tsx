import { useState, useEffect, FC } from 'react';
import { SeoHelmet, YoutubePlaylist } from '../components/index';
import { useLocation } from 'react-router-dom';
import { stripUrlParam, getPlaylistData } from '../utils/youtube';
import { GoSearch } from 'react-icons/go';

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

  const Breadcrumbs = () => {
    const pages = [{ name: 'Playlist', href: '', current: true }];

    return (
      <nav className='mx-8 flex pt-12' aria-label='Breadcrumb'>
        <ol className='flex items-center space-x-4'>
          <li>
            <div>
              <a href='/' className='text-gray-400 hover:text-gray-500'>
                <GoSearch className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className='flex items-center'>
                <svg
                  className='flex-shrink-0 h-5 w-5 text-gray-300'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
                <a
                  href={page.href}
                  className={`ml-4 text-sm font-medium ${
                    page.current ? 'text-indigo-500 hover:text-indigo-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    );
  };

  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Breadcrumbs />
        {playlist && (
          <>
            <Header />
            <YoutubePlaylist data={playlist.items} />
          </>
        )}
      </div>
    </>
  );
};

export default ViewPlaylist;
