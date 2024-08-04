import React from 'react';
import { Typography } from '@material-tailwind/react';

const AutoSolutionMethod = () => {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="text-center">
          <Typography variant="h2" className="mb-3">
            Solution Methods
          </Typography>
          <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
            Processes images from on-board cameras to generate precise real-time data about the environment. For
            example, all road information such as blind spot detection, lane following system, potholes, traffic
            inventory, pedestrian crossings are processed and converted into data.
          </Typography>
        </div>

        <div className="relative mt-10 h-[410px] overflow-hidden rounded-[20px] max-md:hidden">
          <img src="/images/TopCardBg.png" alt="topCardBg" className="topCardBg" />
          <div className="css-kel5ob" />
          <img src="/images/autonomus-topcard.png" alt="autonomus-topcard" className="autonomus-topcard" />
          <div className="css-1i66iuf" />

          <div className="css-18v32hk text-center">
            <Typography variant="paragraph" className="mb-3 text-2xl font-medium text-white">
              Highly Accurate Visual Perception Models
            </Typography>
            <Typography variant="paragraph" className="mx-auto w-[65%] text-lg text-white">
              Computer Vision Technology provides the most accurate data for autonomous vehicles regardless of weather
              conditions, lighting level, season, shooting angle.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSolutionMethod;
