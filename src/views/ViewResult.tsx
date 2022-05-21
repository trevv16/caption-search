import { useState, useEffect, useRef, FC } from 'react';
import { SeoHelmet, VideoCaptions } from '../components/index';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { stripUrlParam, getvideoCaptions } from '../utils/youtube';
import { GoSearch } from 'react-icons/go';

/**
 * https://www.youtube.com/watch?v=yHdLoVpzdcg
 * https://www.youtube.com/watch?v=SXKPBh12WbE&list=PLhKmHfWT5YmKq8M3lrpGBaUDRToxnUAJF&index=1
 *
 * https://www.youtube.com/playlist?list=PLhKmHfWT5YmKq8M3lrpGBaUDRToxnUAJF
 */

const ViewResult: FC<PageProps> = ({ title, description, image, image_alt }) => {
  const playerRef = useRef<any>(null);
  const location = useLocation();
  const urlParam = location.search;
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [searchUrl, setSearchUrl] = useState<string>('');
  const [captions, setCaptions] = useState(null);

  useEffect(() => {
    if (urlParam === undefined) return;

    const url = stripUrlParam(urlParam, 'url');
    const youtubeUrl = url.split('?')[1];
    const id = stripUrlParam(youtubeUrl, 'v');

    if (id === undefined || id === null) return;
    getvideoCaptions(id).then((result) => {
      if (result === undefined || result === null) return;
      const captionData = result?.data.body;

      if (result?.data.status !== 500) {
        setCaptions(captionData);
      }
    });

    if (url) {
      setSearchUrl(url);
    }

    return () => {
      setSearchUrl('');
      setCaptions(null);
    };
  }, [urlParam]);

  const handleSeek = (seconds: number) => {
    const node = playerRef.current;
    node?.seekTo(seconds, 'seconds');

    // Video does not autoplay without this
    setIsPaused(true);
  };

  const Breadcrumbs = () => {
    const pages = [{ name: 'Results', href: '', current: true }];

    return (
      <nav className='flex pt-12' aria-label='Breadcrumb'>
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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Breadcrumbs />
        <div className='max-w-3xl mx-auto mt-56 mb-24'>
          <ReactPlayer ref={playerRef} url={searchUrl} playing={isPaused} width='100%' />
        </div>
        {captions !== null ? (
          <VideoCaptions captions={captions} seek={handleSeek} />
        ) : (
          <p className='my-6 mx-auto text-2xl text-center text-gray-500'>No Captions Found</p>
        )}
      </div>
    </>
  );
};

export default ViewResult;
