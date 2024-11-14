'use client';

import React from 'react';

const EventPage = () => {
  return (
    <div>
      <h2>마우스 이벤트</h2>

      <button
        onClick={() => {
          console.log('클릭');
        }}
        onDoubleClick={() => {
          console.log('더블클릭');
        }}
      >
        클릭 이벤트
      </button>

      <div
        onMouseEnter={() => {
          console.log('마우스 오버');
        }}
        onMouseLeave={(e) => {
          console.log('마우스 나감');
        }}
        className='w-52 h-20 bg-primary text-white'
      >
        마우스 오버/아웃
      </div>

      <div
        onMouseMove={(e) => {
          console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
        }}
        className='w-52 h-20 bg-secondary text-white my-5'
      >
        마우스를 움직여보세요
      </div>

      {/* form 이벤트 */}
      <form>
        {/* 입력 변경 */}
        <input
          type='text'
          className='bg-gray-300'
          onChange={(e) => {
            console.log('값 변경', e);
          }}
          onFocus={(e) => {
            console.log('포커스');
          }}
        />
      </form>

      <input
        type='checkbox'
        onChange={(e) => {
          console.log('체크', e.target.checked);
        }}
      />
    </div>
  );
};

export default EventPage;
