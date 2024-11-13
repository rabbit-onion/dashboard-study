import Button, { ButtonIcon } from '@/components/button/Button';
import Card from '@/components/card/Card';
import Title from '@/components/title/Title';
import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

const CheckTable = ({ tableDataCheck }) => {
  return (
    <Card>
      <Title title='CheckTable' />
      <main>
        <table className='w-full text-left'>
          <thead className='border-b border-b-gray-300 bg-gray-100 text-sm text-gray-500 font-medium'>
            <tr>
              <th className='py-3'>name</th>
              <th>progress</th>
              <th>quantity</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {tableDataCheck.map((item) => (
              <tr key={item.id}>
                <th className='py-3 flex gap-2'>
                  <input checked={item.name[1]} type='checkbox' name={`check-${item.id}`} id={`check-${item.id}`} />
                  <label htmlFor={`check-${item.id}`}>{item.name[0]}</label>
                </th>
                <td>{item.progress}%</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Card>
  );
};

export default CheckTable;
