import { nanoid } from 'nanoid';
import { VideoCard } from './';

export default function YoutubePlaylist(props: any) {
  return (
    <>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
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
