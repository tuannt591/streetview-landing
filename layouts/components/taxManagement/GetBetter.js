import React from 'react';
import { Typography } from '@material-tailwind/react';

const GetBetter = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10">
          <div className="relative max-md:order-1">
            <img src="/images/smartax-card2-bg.png" alt="smartax-card2-bg" />
            <div className="jssgetbetter" />
          </div>

          <div className="max-md:order-2">
            <Typography variant="h3" className="mb-3 font-medium">
              Get Better and Faster Results With Less Cost
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Instead of hiring paid officials for observing signs and calculating taxes, Smartax system is able to
              handle both of them within days. It can bring you the ability to decrease costs and also use human
              resources more efficiently.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetBetter;
