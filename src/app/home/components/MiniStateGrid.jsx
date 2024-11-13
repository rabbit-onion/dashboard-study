import React from 'react';
import MiniState from './MiniState';

const MiniStateGrid = ({ stateData }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
      {/* {배열이름.map((item, index)=>(반복코드))} */}
      {stateData.map((item, index) => (
        <MiniState
          key={index}
          {...item}
          // name={item.name} value={item.value} startContent={item.startContent} endContent={item.endContent} growth={item.growth}
        />
      ))}

      {/* <MiniState name='Earnings' value='$350.4' startContent={<BsBarChartFill />} />
      <MiniState name='Spend this month' value='$642.39' startContent={<FaDollarSign />} />
      <MiniState name='Sales' value='$574.34' growth='+24.5%' />
      <MiniState name='Your balance' value='$1,000' endContent={<FlagImage country='usa' />} />
      <MiniState name='New Tasks' value='154' startContent={<FaRegCheckCircle />} />
      <MiniState name='Total Projects' value='2935' startContent={<IoDocuments />} /> */}
    </div>
  );
};

export default MiniStateGrid;
