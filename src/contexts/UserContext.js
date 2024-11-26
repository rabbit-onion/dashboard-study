'use client';

import { userData } from '@/data/userData';
const { useContext, createContext } = require('react');

// 생성
const UserContext = createContext();

// 공급
export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

// 사용
export const useUser = () => {
  return useContext(UserContext);
};
