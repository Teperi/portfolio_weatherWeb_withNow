import React from 'react';
import { IconContext } from '../node_modules/react-icons';
import { MdLocationOn } from 'react-icons/md';

import './MainHeader.scss';

import Link from 'next/link';

const MainHeader = ({ nowTime }) => {
  return (
    <div className='MainHeader' style={{ color: '#f1f1f1' }}>
      <Link href='/'>
        <a>
          <IconContext.Provider value={{ size: '2em', color: '#f1f1f1' }}>
            <MdLocationOn />
          </IconContext.Provider>
        </a>
      </Link>
      <p className='MainHeader_text'>위치</p>
      <p className='MainHeader_time'>{nowTime}</p>
    </div>
  );
};

export default MainHeader;
