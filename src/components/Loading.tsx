import React from 'react';

export default function Loading(props: any) {
  return (
    <>
      <div>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='border-solid animate-spin rounded-full border-blue-400 border-8 h-44 w-44'
        ></div>
      </div>
    </>
  );
}
