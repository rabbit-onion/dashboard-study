'use client';

import React, { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IoTicket } from 'react-icons/io5';
import { FaTree } from 'react-icons/fa';
import { BiSolidLandscape } from 'react-icons/bi';
import { FaHouseChimney } from 'react-icons/fa6';
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

  // 에어비앤비
  // ==========================================================
  const sortArr = [
    { value: '컬처 아이콘', icon: <IoTicket /> },
    { value: '한적한 시골', icon: <FaTree /> },
    { value: '최고의 전망', icon: <BiSolidLandscape /> },
    { value: '한옥', icon: <FaHouseChimney /> },
  ];

  const [selected, setSelected] = useState(0);

  // useState로 텍스트 변경하기
  // =============================================================
  const [text, setText] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <h2>useState</h2>
      <hr />

      <input type='text' placeholder='안녕하세요.' value={text} onChange={handleChange} className='bg-red-200 my-5' />
      <p>{text}</p>
      <br />

      <hr />
      <div>
        {/* 에어비앤비  */}
        <div>
          {/* tab */}
          <div className='flex gap-5'>
            {sortArr.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
                className={`py-2 ${selected === index ? 'bg-primary-20' : ''}`}
              >
                {item.icon}
                {item.value}
              </button>
            ))}
          </div>
          {/* tab content */}
          {sortArr.map((item, index) => (
            <div key={index} className={`w-full p-5 min-h-40 ${selected === index ? 'block' : 'hidden'}`}>
              {item.value} 내용
            </div>
          ))}
        </div>
      </div>

      <hr />
      {/* button 클릭 시 아이콘 변경 */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FontAwesomeIcon icon={faXmark} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
      </button>

      <hr />
      {/* button 클릭 시 숫자 증가/감소 */}
      <strong>{number}</strong>
      <button onClick={increase} className='mx-2 w-12 h-8 bg-secondary text-white'>
        증가
      </button>
      <button onClick={decrease} className='w-12 h-8 bg-gray-500 text-white'>
        감소
      </button>

      <hr />
      {/* button 클릭 시 이름 변경 */}
      <strong>{name}</strong>
      <button onClick={changeName} className='block w-20 h-10 bg-primary text-white'>
        이름 변경
      </button>
    </div>
  );
};

export default StatePage;
