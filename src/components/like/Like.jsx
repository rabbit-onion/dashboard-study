'use client';

import React, { createContext, useContext, useState } from 'react';
import { Heart } from 'lucide-react';
import classNames from 'classnames';
import { BtnProvider, useBtn } from '@/contexts/BtnContext';

// =======================================================
const BtnLike = () => {
  const { isLiked, toggleLike } = useBtn();

  return (
    <button onClick={toggleLike}>
      <Heart size={50} fill={isLiked ? 'red' : 'none'} />
    </button>
  );
};

const BtnFollow = () => {
  // 사용
  const { isLiked, toggleLike } = useBtn();

  return (
    <button onClick={toggleLike} className={classNames('px-5 py-3 rounded text-xl', isLiked ? 'bg-gray-400' : 'bg-blue-500')}>
      {isLiked ? '팔로잉' : '팔로우'}
    </button>
  );
};

// =========================================================
const Like = () => {
  return (
    <>
      <div className='flex items-center gap-1 rounded text-xl'>
        <BtnLike />
        <BtnFollow />
      </div>
    </>
  );
};

export default Like;
