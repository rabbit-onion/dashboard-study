'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const SamplePage = () => {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('겨울');

  const sortArr = [
    {
      value: '메뉴1',
    },
    {
      value: '메뉴2',
    },
    {
      value: '메뉴3',
    },
  ];
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div>
        {/* tab */}
        <div>
          {sortArr.map((item, index) => (
            <button
              key={index}
              className={classNames(tab === index ? 'bg-blue-200' : '')}
              onClick={() => {
                setTab(index);
              }}
            >
              {item.value}
            </button>
          ))}
          {/* <button>메뉴1</button>
          <button>메뉴2</button>
          <button>메뉴3</button> */}
        </div>

        {/* tab-cont */}
        <div>
          {tab === 0 && <div>메뉴1 컨텐츠</div>}
          {tab === 1 && <div>메뉴2 컨텐츠</div>}
          {tab === 2 && <div>메뉴3 컨텐츠</div>}
          {/* <div>메뉴1 컨텐츠</div>
          <div>메뉴2 컨텐츠</div>
          <div>메뉴3 컨텐츠</div> */}
        </div>
      </div>

      <hr />
      <input
        type='text'
        value={text}
        className='bg-yellow-200 block mx-auto my-5'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p className='block text-center my-5'>{text}</p>

      <hr />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='relative z-10'
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </button>
      {/* <div className={`fixed w-full h-full bg-blue-200 top-0 transition-all duration-300 ${isOpen ? 'left-0' : 'left-full'}`}>전체메뉴</div> */}

      <div className={classNames('fixed w-full h-full bg-blue-200 top-0 transition-all duration-300', isOpen ? 'left-0' : 'left-full')}>전체메뉴</div>

      <hr />
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>

      <hr />
      <h2>useState를 이용해 겨울 - 가을로 바꾸기</h2>

      <strong>{name}</strong>
      <button
        onClick={() => {
          setName(name === '겨울' ? '가을' : '겨울');
        }}
      >
        이름 변경
      </button>
    </div>
  );
};

export default SamplePage;
