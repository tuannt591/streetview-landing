import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';
import { IconDigitalTwinBanner1, IconDigitalTwinBanner2, IconDigitalTwinBanner3 } from 'constants/icons';

const LIST_LOGO = [
  '/images/google_map_logo.svg',
  '/images/map_esri.svg',
  '/images/map_here.svg',
  '/images/map_mapbox.svg',
  '/images/map_tomtom.svg',
];

const DigitalTwinBanner = () => {
  const router = useRouter();

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:order-2 lg:order-1 lg:w-[50%]">
            <Typography variant="h2" className="mb-3 text-5xl max-md:text-4xl">
              Digital Twin
              <br />
              Solutions
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              With Mapilio, it is possible to capture a region, building or even an object than creating a digital twin
              of from these imagery.
            </Typography>
            <div className="mt-5 grid grid-cols-2 items-center justify-center gap-4 gap-4 md:w-[350px]">
              <Button
                variant="filled"
                size="lg"
                color="blue"
                className="rounded-full p-[15px] font-normal normal-case"
                onClick={() => router.push(paths.contact)}
              >
                Contact us
              </Button>
              <Button variant="outlined" size="lg" className="rounded-full p-[15px] font-normal normal-case">
                Catalog
              </Button>
            </div>
          </div>

          <div className="order-1 relative w-full lg:order-2 max-md:hidden md:h-[650px] lg:mt-[-70px] lg:h-auto lg:w-[50%]">
            <IconDigitalTwinBanner1 />
            <IconDigitalTwinBanner2 />
            <IconDigitalTwinBanner3 />
          </div>
        </div>

        <div className="mx-auto mt-[50px] grid grid-cols-5 items-center gap-4 md:w-[500px] lg:mt-[300px]">
          {LIST_LOGO.map((url, index) => {
            return <img key={index} className="w-[100%]" src={url} alt="image" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinBanner;
