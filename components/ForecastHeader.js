import React from 'react';

import { IconContext } from '../node_modules/react-icons';
import { MdKeyboardBackspace } from 'react-icons/md';

import './ForecastHeader.scss';

import Link from 'next/link';

const ForecastHeader = ({ address, nowTime }) => {
  return (
    <div className='ForecastHeader' style={{ color: 'white' }}>
      <Link href='/'>
        <a>
          <IconContext.Provider value={{ size: '2em', color: 'white' }}>
            <MdKeyboardBackspace />
          </IconContext.Provider>
        </a>
      </Link>
      <p className='ForecastHeader_text'>{address}</p>
      <p className='ForecastHeader_time'>{nowTime}</p>
    </div>
  );
};

export default ForecastHeader;
