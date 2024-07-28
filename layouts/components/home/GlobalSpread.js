import React from 'react';
import { Typography } from '@material-tailwind/react';
import Globe from './Globe';

const GlobalSpread = () => {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-1 justify-between md:gap-20 lg:grid-cols-2">
          <div className="relative z-[1] h-[400px] w-[400px] cursor-grab select-none max-lg:m-auto">
            <Globe />
          </div>
          <div className="max-sm:mt-[30px]">
            <Typography variant="h2" className="mb-3">
              {`Mapilio's Global Spread`}
            </Typography>
            <Typography variant="paragraph" className="mb-5 text-lg text-gray-600">
              Mapilio processes thousands of kilometers of data captured every day around the world, analyzes objects
              and creates meaningful map data
            </Typography>
            <Typography variant="h3" className="max-md:text-[24px]">
              <span className="bg-blue-700 px-2 py-1 text-white">97.150</span>&nbsp;&nbsp;KM&nbsp;&nbsp;
              <span className="bg-blue-700 px-2 py-1 text-white">47+</span>&nbsp;&nbsp;Countries&nbsp;&nbsp;
              <br />
              <span className="mt-5 inline-block bg-blue-700 px-2 py-1 text-white">573+</span>&nbsp;&nbsp;Classes
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSpread;
