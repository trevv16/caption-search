import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GoSearch } from 'react-icons/go';
import DOMPurify from 'dompurify';
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

export default function VideoCaptions(props: any) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  dayjs.extend(duration); // use plugin

  useEffect(() => {
    if (!(props.captions?.length > 0)) return;

    const searchResult = props.captions.filter((item: any) => {
      console.log(item.text.includes(query));
      return item.text.includes(query);
    });

    if (!(searchResult?.length > 0)) return;
    setResults(searchResult);
  }, [props.captions, query]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (query === '') return;
  };

  const handleInput = (event: any) => {
    setQuery(event.target.value);
  };

  const CaptionText = (data: any) => {
    // captions.duration is available
    console.log('captions', data);
    return data.captions.map((line: any) => {
      const cleanCaption = DOMPurify.sanitize(line.text);
      const cleanDuration = dayjs.duration(line.start, 'seconds').format('HH:mm:ss');

      return (
        <div key={nanoid()} className='mt-4'>
          <button onClick={() => props.seek(line.start)} className='font-medium text-indigo-600 hover:text-indigo-900'>
            {cleanDuration}
          </button>
          <h2>
            <span className='font-medium'>{'Duration: '}</span>
            {line.duration}
          </h2>
          <p
            className='text-black mt-2 text-xl font-bold pb-4 border-b'
            dangerouslySetInnerHTML={{ __html: cleanCaption }}
          ></p>
        </div>
      );
    });
  };

  return (
    <>
      <div className='bg-gray-50 overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
        <div className='px-4 py-5 sm:px-6'>
          <form onSubmit={handleSearch}>
            <div className='mt-1 relative rounded-md shadow-sm'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <GoSearch className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </div>
              <input
                id='query'
                name='query'
                type='text'
                onChange={handleInput}
                value={query}
                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                placeholder='Search Captions'
              />
            </div>
          </form>
        </div>
        <div className='px-4 py-5 sm:p-6'>
          {results !== null ? <CaptionText captions={results} /> : <CaptionText captions={props.captions} />}
        </div>
      </div>
    </>
  );
}
