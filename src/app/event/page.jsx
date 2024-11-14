'use client';

import React from 'react';

const EventPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent- 가장 윗줄에 적어야함
    console.log('제출');
  };
  // preventDefault 사용 이유
  // 1. a태그를 눌렀을 때도 링크가 작동하지 않게 하고 싶을 때
  // 2. 버튼을 눌렀을 때 페이지가 새로고침되는 것을 방지

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
      <form onSubmit={handleSubmit}>
        {/* 입력 변경 */}
        <input
          type='text'
          className='bg-gray-300'
          onChange={(e) => {
            console.log('값 변경', e.target.value);
          }}
          onFocus={(e) => {
            console.log('포커스');
          }}
        />

        <button type='submit'>제출</button>
      </form>

      <input
        type='checkbox'
        onChange={(e) => {
          console.log('체크', e.target.checked);
        }}
      />

      <select
        onChange={(e) => {
          console.log('선택', e.target.value);
        }}
      >
        <option value='option1'>옵션1</option>
        <option value='option2'>옵션2</option>
        <option value='option3'>옵션3</option>
      </select>
    </div>
  );
};

export default EventPage;
