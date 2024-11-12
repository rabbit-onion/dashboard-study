const { default: FlagImage } = require('@/components/icon/FlagImage');
const { BsBarChartFill } = require('react-icons/bs');
const { FaDollarSign, FaRegCheckCircle } = require('react-icons/fa');
const { IoDocuments } = require('react-icons/io5');

export const stateData = [
  {
    name: 'Earnings',
    value: '$350.4',
    startContent: <BsBarChartFill />,
  },
  {
    name: 'Spend this month',
    value: '$642.39',
    startContent: <FaDollarSign />,
  },
  {
    name: 'Sales',
    value: '$574.34',
    growth: '+24.5%',
  },
  {
    name: 'Your balance',
    value: '$1,000',
    endContent: <FlagImage country='usa' />,
  },
  {
    name: 'New Tasks',
    value: '154',
    startContent: <FaRegCheckCircle />,
  },
  {
    name: 'Total Projects',
    value: '2935',
    startContent: <IoDocuments />,
  },
];
