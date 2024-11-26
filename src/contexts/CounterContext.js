'use client';

import { setCount } from '@/reducers/counterReducer';
import React, { useContext, useReducer } from 'react';

// 만들기
const CounterContext = React.createContext();

// 공급
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(setCount, {
    counter: 0,
    name: 'counter',
  });

  return <CounterContext.Provider value={{ count, dispatch }}>{children}</CounterContext.Provider>;
};

// 사용
export const useCounter = () => {
  const counterUseContext = useContext(CounterContext);
  return counterUseContext;
};
