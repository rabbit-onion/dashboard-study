import Card from '@/components/card/Card';
import FlagImage from '@/components/icon/FlagImage';
import IconBox from '@/components/icon/IconBox';
import Image from 'next/image';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';

const MiniState = ({ name, value, startContent, endContent, growth }) => {
  return (
    <Card>
      <div className='flex items-center gap-5'>
        {/* 앞쪽 아이콘 */}

        {/* &&연산자를 사용해 startContent가 참일 경우에만 보이게 하기 */}
        {/* 둘 다 참이면 마지막값을 반환 */}
        {startContent && <IconBox className='w-14 h-14 bg-primary-10 text-lg'>{startContent}</IconBox>}

        {/* 텍스트 */}
        <div>
          <span className='text-primary-40 text-sm'>{name}</span>
          <strong className='block font-bold text-lg'>{value}</strong>
          {growth && (
            <div className='flex gap-2'>
              <span className='text-secondary text-sm'>{growth}</span>
              <span className='text-gray-500 text-sm'>Since last month</span>
            </div>
          )}
        </div>
        {/* 국기 이미지 */}
        {endContent && <div className='rounded-full ml-auto w-[50px] h-[50px]'>{endContent}</div>}
      </div>
    </Card>
  );
};

export default MiniState;
