interface AlertProps {
  status: 'success' | 'warn' | 'error';
  children: any;
}

export default function Alert(props: AlertProps) {
  const SuccessAlert = () => (
    <div className='my-16 rounded-md bg-success p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          {/* Heroicon name: solid/check-circle */}
          <svg
            className='h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <p className='text-md font-medium text-white'>{props.children}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              type='button'
              className='inline-flex bg-white rounded-md p-1.5 text-success hover:bg-successDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'
            >
              <span className='sr-only'>Dismiss</span>
              {/* Heroicon name: solid/x */}
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const WarnAlert = () => (
    <div className='my-16 rounded-md bg-warningDark p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          {/* Heroicon name: solid/check-circle */}
          <svg
            className='h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <p className='text-md font-medium text-white'>{props.children}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              type='button'
              className='inline-flex bg-white rounded-md p-1.5 text-warning hover:bg-warningDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600'
            >
              <span className='sr-only'>Dismiss</span>
              {/* Heroicon name: solid/x */}
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ErrorAlert = () => (
    <div className='my-16 rounded-md bg-danger p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          {/* Heroicon name: solid/check-circle */}
          <svg
            className='h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <p className='text-md font-medium text-white'>{props.children}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              type='button'
              className='inline-flex bg-white rounded-md p-1.5 text-danger hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600'
            >
              <span className='sr-only'>Dismiss</span>
              {/* Heroicon name: solid/x */}
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {props.status !== null ? (
        <>
          {props.status === 'success' && <SuccessAlert />}

          {props.status === 'warn' && <WarnAlert />}

          {props.status === 'error' && <ErrorAlert />}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
