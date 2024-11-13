'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/button/Button';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/data/stateData';
import CheckTable from './components/CheckTable';
import { tableDataCheck } from '@/data/tableDataCheck';

const HomePage = () => {
  return (
    <div id='wrap' className='bg-gray-100'>
      <Header />
      {/* {ministate} */}
      <main className='inner flex flex-col gap-20'>
        <div className='flex gap-4'>
          <Button>확인</Button>
          <Button gray>취소</Button>

          <button
            onClick={(event) => {
              console.log('확인');
              console.log(event);
            }}
            className='bg-red-100 px-5'
          >
            확인
          </button>
        </div>

        <MiniStateGrid stateData={stateData} />

        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='grow'>
            <CheckTable tableDataCheck={tableDataCheck} />
          </div>
          <div className='grow flex flex-col md:flex-row gap-4'>
            <div className='bg-violet-100 grow'>g</div>
            <div className='bg-violet-100 grow'>g</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
