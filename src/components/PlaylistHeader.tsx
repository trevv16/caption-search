export default function PlaylistHeader({ playlist }: any) {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h3 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>{playlist.channelTitle}</h3>
          <a href={playlist.playlistUrl} className=''>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              {playlist.playlistTitle}
            </p>
          </a>
          <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
            {playlist.total === 1 ? '1 video' : `${playlist.total} videos`}
          </p>
        </div>
      </div>
    </div>
  );
}
