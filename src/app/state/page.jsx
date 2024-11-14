'use client';

import React, { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

const StatePage = () => {
  // useState로 텍스트 변경
  // let name = '김겨울';

  // const [상태이름, 상태변경함수] = useState(초기값);
  const [name, setName] = useState('김겨울');

  const changeName = () => {
    // name = name === '김겨울' ? '김가을' : '김겨울';
    // console.log(name);
    // document.querySelector('strong').innerText = name;

    setName(name === '김겨울' ? '김가을' : '김겨울');
  };

  // useState로 숫자 증감
  // ===================================================
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  // useState로 버튼 클릭 시 아이콘 변경
  // ========================================================
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>useState</h2>
      <hr />

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FontAwesomeIcon icon={faXmark} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
      </button>

      <hr />
      <strong>{number}</strong>
      <button onClick={increase} className='mx-2 w-12 h-8 bg-secondary text-white'>
        증가
      </button>
      <button onClick={decrease} className='w-12 h-8 bg-gray-500 text-white'>
        감소
      </button>

      <hr />

      <strong>{name}</strong>
      <button onClick={changeName} className='block w-20 h-10 bg-primary text-white'>
        이름 변경
      </button>
    </div>
  );
};

export default StatePage;
