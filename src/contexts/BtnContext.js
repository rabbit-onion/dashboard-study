'use client';

import { createContext, useContext, useState } from 'react';

// =============================================
// 생성 (보급품 만들기)

// Context 생성 : createContext를 컴포넌트화
// const BtnContext = createContext(context 미사용 시 default값);
const BtnContext = createContext();

// =============================================
// 공급 (드론으로 날려)
export const BtnProvider = ({ children }) => {
  const [isLiked, SetIsLiked] = useState(false);
  const toggleLike = () => {
    return SetIsLiked(!isLiked);
  };

  return <BtnContext.Provider value={{ isLiked, toggleLike }}>{children}</BtnContext.Provider>;
};

// =============================================
// 사용 (투척)
export const useBtn = () => {
  const context = useContext(BtnContext);
  if (!context) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};
