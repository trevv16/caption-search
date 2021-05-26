import React, { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { SeoHelmet } from '../components/index';
import { GoSearch } from 'react-icons/go';

import { isPlaylist } from '../utils/youtube';

const HomePage: FC<PageProps> = ({ title, description, image, image_alt }) => {
  const [url, setUrl] = useState<string>('');
  const history = useHistory();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (url === '') return;

    if (isPlaylist(url)) {
      return history.push(`/playlist?url=${url}`);
    }

    history.push(`/results?url=${url}`);
  };

  const handleInput = (event: any) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <SeoHelmet title={title} description={description} image={image} image_alt={image_alt} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'>
          <div>
            <form onSubmit={handleSearch}>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <GoSearch className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </div>
                <input
                  id='url'
                  name='url'
                  type='text'
                  onChange={handleInput}
                  value={url}
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='Enter Youtube Video or Playlist URL'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
