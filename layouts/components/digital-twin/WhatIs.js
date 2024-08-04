import React from 'react';
import { Typography } from '@material-tailwind/react';
import { IconCheck, IconWhatIsBuilding1, IconWhatIsBuilding2, IconWhatIsBuilding3 } from 'constants/icons';

const LIST_DATA_CREATION = [
  { value: 'Data visualization' },
  { value: 'Feature generation and extraction' },
  { value: 'Workflow and work frameworks' },
];
const LIST_REAL_TIME = [
  { value: 'Reporting and monitoring' },
  { value: 'Analytics and insights' },
  { value: 'Enchanced virtualization' },
];

const WhatIs = () => {
  return (
    <section className="overflow-hidden pb-[70px]">
      <div className="container">
        <div className="mb-10 text-center">
          <Typography variant="h2" className="mb-3">
            What is a digital twin?
          </Typography>
          <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
            Digital twin is a digital model which represents objects, things, processes, relationships in real
            world.Especially digital models of natural and built environments are work an assesment areas of next
            generation
          </Typography>
        </div>

        <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-20">
          <div className="relative h-[410px] max-md:mx-auto max-md:mb-[130px] max-md:w-[340px]">
            <img src="/images/dt-1.svg" alt="dt-1" className="dt-1" />
            <img src="/images/dt-2.svg" alt="dt-2" className="dt-2" />
            <img src="/images/dt-3.png" alt="dt-3" className="dt-3" />
          </div>

          <div>
            <div className="mb-10">
              <Typography variant="h3" className="mb-3">
                Data Creation
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                With digital twin, it is possible to capture data from real world and import this data to digital world.
              </Typography>

              <div>
                {LIST_DATA_CREATION.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      variant="paragraph"
                      className="mb-2 flex items-center text-lg text-gray-600"
                    >
                      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-500 text-white">
                        <IconCheck />
                      </span>
                      <span className="w-[calc(100% - 18px)] pl-[10px]">{item.value}</span>
                    </Typography>
                  );
                })}
              </div>
            </div>

            <div className="mb-10">
              <Typography variant="h3" className="mb-3">
                Real-Time Visualization
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                With real-time insights and an authoritative network, you can make the smart choices, explore new
                models.
              </Typography>

              <div>
                {LIST_REAL_TIME.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      variant="paragraph"
                      className="mb-2 flex items-center text-lg text-gray-600"
                    >
                      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-500 text-white">
                        <IconCheck />
                      </span>
                      <span className="w-[calc(100% - 18px)] pl-[10px]">{item.value}</span>
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-between max-md:mt-[50px] md:mt-[50px] md:grid-cols-2 md:gap-20 lg:mt-[280px]">
          <div className="max-md:order-2">
            <div className="mb-10">
              <Typography variant="h3" className="mb-3">
                Find What You Want Exactly On Your Screen
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                In the modern world, everything has a virtual counterpart. A lot of project work, control, trade is now
                done through Digital Twins., You can reach the details of any item without leaving your seat.
              </Typography>
            </div>
          </div>

          <div className="relative max-md:order-1 max-md:mx-auto max-md:h-[430px] max-md:w-[340px]">
            <div className="css-s8gcyy">
              <IconWhatIsBuilding1 />
            </div>
            <div className="css-xn0zva">
              <IconWhatIsBuilding2 />
            </div>
            <div className="css-40s3d0">
              <IconWhatIsBuilding3 />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-between max-md:mt-[50px] md:mt-[100px] md:grid-cols-2 md:gap-20 lg:mt-[200px]">
          <div className="relative max-md:mb-[50px]">
            <img src="/images/twin_graph.svg" alt="twin_graph" className="twin_graph" />
          </div>

          <div>
            <div className="mb-10">
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                Mapilio`s analyzes and reports based on created digital twins can change your company ability to
                perceive and evaluate.
                <br />
                <br />
                Mapilio makes the world accessible to everyone with the data it provides.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
