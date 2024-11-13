import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { ButtonIcon } from '../button/Button';

const Title = ({ title }) => {
  return (
    <header className='flex justify-between items-center'>
      <h2>{title}</h2>
      <ButtonIcon blind='옵션 보기' className='w-9 h-9 bg-gray-100'>
        <MdMoreHoriz />
      </ButtonIcon>
    </header>
  );
};

export default Title;
