// Title.js
import React from 'react';

const Title = ({ text }) => {
  return (
    <div>
      <h1 className='lg:text-[35px] text-[25px] font-Mulish font-normal border-b-[1px] inline-block border-black pb-[10px]'>
        {text}
      </h1>
    </div>
  );
};

export default Title;
