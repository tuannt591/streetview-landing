import React from 'react';
import { Typography } from '@material-tailwind/react';

const AutoAlwaysThe = () => {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10">
          <div className="max-md:order-2">
            <Typography variant="h3" className="mb-3 font-medium">
              Always the Most Up-to-Date Information
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Our world is changing very rapidly. Every morning we are finding changes in our cities.
              <br />
              <br />
              Thanks to a wide network of contributors from all over the world data content that is constantly updated
              and made available to you
            </Typography>
          </div>

          <div className="relative max-md:order-1">
            <img src="/images/after.png" alt="after" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoAlwaysThe;
