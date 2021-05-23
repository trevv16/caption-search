import React from 'react';
import { SeoHelmet } from '../../components/index';

export default function SignUpPage() {
  return (
    <>
      <SeoHelmet title='Sign Up' description='' image='' image_alt='' />
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create an account</h2>
          <p className='mt-2 text-center text-sm text-gray-600 max-w'>
            {'Or '}
            <a href='/signin' className='font-medium text-primary hover:text-primary'>
              Sign In
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label htmlFor='first_name' className='block text-sm font-medium text-gray-700'>
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    id='first_name'
                    name='first_name'
                    type='text'
                    autoComplete='given-name'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='last_name' className='block text-sm font-medium text-gray-700'>
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    id='last_name'
                    name='last_name'
                    type='text'
                    autoComplete='family-name'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email Address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='new-password'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-primary sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>Or continue with</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
                <div>
                  <a
                    href='/'
                    className='w-full inline-flex justify-center py-2 px-4 border border-gray rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                  >
                    <span className='sr-only'>Sign in with Google</span>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 56.6934 56.6934' aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href='/'
                    className='w-full inline-flex justify-center py-2 px-4 border border-gray rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                  >
                    <span className='sr-only'>Sign in with Facebook</span>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href='/'
                    className='w-full inline-flex justify-center py-2 px-4 border border-gray rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                  >
                    <span className='sr-only'>Sign in with Twitter</span>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                      <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
