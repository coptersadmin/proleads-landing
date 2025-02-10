import BreadCumb from '@/app/Components/Common/BreadCumb';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import Pricing4 from '@/app/Components/Pricing/Pricing4';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Pricing"
      ></BreadCumb> 
      <Pricing1></Pricing1> 
    </div>
  );
};

export default page;