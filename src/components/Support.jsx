import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon, HomeIcon, OfficeBuildingIcon, DesktopComputerIcon} from '@heroicons/react/solid'

import supportImg from '../assets/49.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>PELAYANAN</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Layanan Kami</h3>
              <p className='py-4 text-3xl text-slate-300'>Melayani jasa desain arsitektur baik residential maupun commercial building, jasa desain interior hunian minimalis, klasik, atau tropis, dan jasa pembangunan yang dikerjakan oleh profesional.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <HomeIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Desain Arsitektur</h3>
                      <p className='text-gray-600 text-xl'>Jasa desain arsitektur baik ‘residential’ maupun ‘commercial building’ meliputi rumah tinggal, villa, cafe, restaurant, indekost dan lain-lain.</p>
                  </div>
                  {/* <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div> */}
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Desain Interior/Eksterior</h3>
                      <p className='text-gray-600 text-xl'>Jasa desain interior/eksterior meliputi bangunan hunian maupun komersial dengan berbagai macam konsep seperti: minimalis, rustic, classic, tropical.</p>
                  </div>
                  {/* <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div> */}
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <OfficeBuildingIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Pembangunan</h3>
                      <p className='text-gray-600 text-xl'>Jasa pembangunan baik ‘residential’ maupun ‘commercial building’ meliputi rumah tinggal, villa, cafe, restaurant, indekost dan dikerjakan oleh Tim profesional yang berpengalaman untuk daerah Yogyakarta dan sekitarnya.</p>
                  </div>
                  {/* <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div> */}
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
