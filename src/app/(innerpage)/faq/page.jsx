import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq1 from '@/app/Components/Faq/Faq1';
import Faq2 from '@/app/Components/Faq/Faq2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="FAQ's"
            ></BreadCumb>
            <Faq1></Faq1>       
    </div>
  );
};

export default page;