'use client';

import Like from '@/components/like/Like';
import User from '@/components/user/User';

import React, { useReducer } from 'react';

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded';

const ContextPage = () => {
  return (
    <div>
      {/* like component*/}
      <Like />
      {/* data component */}
      <User />
    </div>
  );
};

export default ContextPage;
