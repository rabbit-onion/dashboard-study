'use client';

import React, { useEffect, useState } from 'react';

const EffectPage = () => {
  const [color, setColor] = useState('lightblue');
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isShow, setIsShow] = useState(true);

  //  ================================================
  // useEffect(함수, [의존성배열])

  // 마운트시에만 실행
  // useEffect(함수(마운트 시 실행할 코드 작성) [])
  useEffect(() => {
    console.log('마운트 시에만 실행');
    // body에 배경색 추가
    document.body.style.backgroundColor = 'lightblue';

    // 언마운트시에만 실행
    return () => {
      console.log('언마운트 시에만 실행');
      document.body.style.backgroundColor = '';
    };
  }, []);

  // 업데이트 시에만 실행
  // useEffect(함수, [의존성배열])
  // 의존성배열의 상태가 변경될 때만 실행됨
  useEffect(() => {
    console.log('업데이트 시에만 실행');
    // body에 배경색 추가
    document.body.style.backgroundColor = color;

    // color값이 바뀔 때마다 useEffect가 실행됨
  }, [color]);

  // ==============================================
  // 마운트 시에만 실행
  useEffect(() => {
    console.log('2 : 마운트 시에만 실행');
  }, []);

  // 마운트 시, 업데이트 시 실행
  // useEffect(함수)
  useEffect(() => {
    console.log('2 : 마운트 시, 업데이트 시 실행');
  });

  // 업데이트 시 (특정 상태값이 변경될 때)만 실행
  // useEffect(함수, [특정상태값])
  useEffect(() => {
    console.log('2 : 업데이트 시에만 실행');

    // 언마운트 시에만 실행
    return () => {
      console.log('2 : 언마운트 시에만 실행');
    };
  }, [count]);

  // ===========================================
  // 타이머
  // 마운트 시, 업데이트 시 실행
  useEffect(() => {
    let interval;

    if (isShow) {
      // isShow가 true일 때 setInterval을 사용해 1초마다 timer 상태값을 변경
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      setTimer(0);
    };
  }, [isShow]);

  return (
    <div>
      <div>
        {isShow ? (
          <>
            <strong>{timer} 초</strong>
            <button
              onClick={() => {
                setIsShow(false);
              }}
              className='ml-5'
            >
              타이머 숨기면서 정지
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setIsShow(true);
            }}
            className='ml-5'
          >
            타이머 보이기
          </button>
        )}
      </div>

      <hr />
      <div>
        <p>Count : {count}</p>
        <button
          className='ml-5'
          onClick={() => {
            setCount(count + 1);
          }}
        >
          증가
        </button>
      </div>

      <hr />
      <h1>useEffect</h1>
      <button
        onClick={() => {
          setColor('yellow');
        }}
        className='bg-red-100 p-3'
      >
        색상 변경
      </button>
    </div>
  );
};

export default EffectPage;
