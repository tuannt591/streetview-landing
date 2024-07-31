import React from 'react';
import { Typography, Card, CardHeader, CardBody, CardFooter } from '@material-tailwind/react';
import { IconArrow, IconStop } from 'constants/icons';

const LIST = [
  {
    photo: '/images/newyork_data.png',
    title: 'Toronto',
    description: 'Traffic Sign detection.',
    url: '',
  },
  {
    photo: '/images/barcelona_data.png',
    title: 'Frankfurt',
    description: 'Shop sign detection.',
    url: '',
  },
  {
    photo: '/images/tokyo_data.png',
    title: 'Australia',
    description: 'Electric pole detection.',
    url: '',
  },
  {
    photo: '/images/istanbul_data.png',

    title: 'Ireland',
    description: 'Trash detection.',
    url: '',
  },
  {
    photo: '/images/dubai_data.png',
    title: 'Latvia',
    description: 'Pothole detection.',
    url: '',
  },
];

const DataFor = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mb-[50px] text-center">
          <Typography variant="h2">DATA FOR THE WHOLE WORLD</Typography>
        </div>

        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-5">
          {LIST.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                <div className="destination w-full max-md:mb-5">
                  <div className="relative mx-auto h-[208px] w-[208px] overflow-hidden rounded-full">
                    <img className="h-full w-full object-cover" src={item.photo} alt="card-image" />
                    <div className="destinationInfo absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[#283033e6] px-2">
                      <IconStop />
                      <Typography className="m-5 text-center text-sm text-white">
                        {item.title}&nbsp; see data on map
                      </Typography>
                      <IconArrow />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <Typography variant="h5" color="blue-gray" className="mb-1 font-medium">
                      {item.title}
                    </Typography>
                    <Typography className="text-sm">{item.description}</Typography>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataFor;
