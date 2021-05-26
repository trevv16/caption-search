import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

export default function YoutubePlaylist(props: any) {
  const VideoCard = (props: any) => {
    const data = props.data;
    return (
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <Link to={`/results?url=${data.videoUrl}`} className='text-indigo-500 hover:text-indigo-700'>
            <h3 className='mt-6 text-lg font-medium'>{data.title}</h3>
          </Link>
          <p className='mt-6 text-gray-900 text-md'>{data.description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {props.data &&
          props.data.map((video: any) => {
            return (
              <div key={nanoid()} className='col-span-1 m-4'>
                <VideoCard data={video} />
              </div>
            );
          })}
      </div>
    </>
  );
}
