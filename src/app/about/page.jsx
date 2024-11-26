'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useBtn } from '@/contexts/BtnContext';

const AboutPage = () => {
  const { isLiked, toggleLike } = useBtn();

  return (
    <div>
      <button onClick={toggleLike}>
        <Heart size={50} fill={isLiked ? 'red' : 'none'} />
      </button>
    </div>
  );
};

export default AboutPage;
