'use client';

import { ACTION_TYPE, setCount } from '@/reducers/counterReducer';
import React, { useReducer } from 'react';

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded';

const ReducerPage = () => {
  // const [count, setCount] = useState(0);

  // useReducer
  // const [현재상태, 파견함수] = useReducer(상태변경함수, 초기값);
  const [count, dispatch] = useReducer(setCount, {
    counter: 0,
    name: 'counter',
  });
  // const count = { counter: 0, name: 'counter' };

  return (
    <div className='flex gap-5 m-10 items-center'>
      <button className={buttonStyle} onClick={() => dispatch({ type: ACTION_TYPE.DECREMENT })}>
        -
      </button>
      <strong className='text-gray-600 text-lg'>
        {count.name}: {count.counter} 초
      </strong>
      <button className={buttonStyle} onClick={() => dispatch({ type: ACTION_TYPE.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.RESET })}>reset</button>
    </div>
  );
};

export default ReducerPage;
