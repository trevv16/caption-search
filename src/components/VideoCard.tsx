import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default function VideoCard({ data }: any) {
  const cleanDate = dayjs(data.publishedAt).format('MMM D, YYYY');

  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <Link to={`/results?url=${data.videoUrl}`} className='text-indigo-500 hover:text-indigo-700'>
          <img
            className='mb-6 rounded'
            src={`https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`}
            alt='youtube thumbnail'
          />
          <h3 className='mt-6 text-lg font-medium'>{data.title}</h3>
        </Link>
        <p className='mt-2 text-gray-500 text-md font-semibold'>{cleanDate}</p>
        <p className='mt-6 text-gray-900 text-md line-clamp-1'>{data.description}</p>
      </div>
    </div>
  );
}
