import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';
import { MotionYContainer } from '@components/Motion';
import {
  IconBuilding1,
  IconBuilding10,
  IconBuilding11,
  IconBuilding12,
  IconBuilding13,
  IconBuilding2,
  IconBuilding3,
  IconBuilding4,
  IconBuilding5,
  IconBuilding6,
  IconBuilding7,
  IconBuilding8,
  IconBuilding9,
} from 'constants/icons';

const LIST_LOGO = [
  '/images/google_map_logo.svg',
  '/images/map_esri.svg',
  '/images/map_here.svg',
  '/images/map_mapbox.svg',
  '/images/map_tomtom.svg',
];

const TaxBanner = () => {
  const router = useRouter();

  return (
    <section className="section overflow-hidden md:pt-[100px]">
      <div className="container">
        <div className="relative z-[3] flex flex-wrap justify-between">
          <div className="w-full md:order-2 lg:order-1 lg:w-[50%]">
            <Typography variant="h2" className="mb-3 text-5xl max-md:text-4xl">
              Tax management
              <br />
              Solutions
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Creat your sign-taxation system with artificial intelligence. Detect all sigboards within days from
              streel-level-images and have most up-to-date taxation information for target area.
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

          <div className="tax-banner-image order-1 relative w-full lg:order-2 max-md:hidden lg:h-auto lg:w-[50%]">
            <div className="jss23">
              <div className="icon-building-1">
                <IconBuilding1 />
              </div>

              <div className="icon-building-2">
                <IconBuilding2 />
              </div>

              <div className="icon-building-3">
                <IconBuilding3 />
              </div>

              <div className="icon-building-4">
                <IconBuilding4 />
              </div>

              <div className="icon-building-5">
                <IconBuilding5 />
              </div>

              <div className="icon-building-6">
                <IconBuilding6 />
              </div>

              <div className="icon-building-7">
                <IconBuilding7 />
              </div>

              <div className="icon-building-8">
                <IconBuilding8 />
              </div>

              <div className="icon-building-9">
                <IconBuilding9 />
              </div>

              <div className="icon-building-10">
                <IconBuilding10 />
              </div>

              <div className="icon-building-11">
                <IconBuilding11 />
              </div>

              <div className="icon-building-12">
                <IconBuilding12 />
              </div>

              <div className="icon-building-13">
                <div className="jssbuilding13">
                  <IconBuilding13 />
                </div>
              </div>
            </div>
            <img src="/images/smartax_bg.svg" alt="smartax_bg" className="smartax_bg" />
          </div>
        </div>

        <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="mx-auto mt-[50px] grid grid-cols-5 items-center gap-4 md:mt-[70px] md:w-[500px] lg:mt-[150px]">
            {LIST_LOGO.map((url, index) => {
              return <img key={index} className="w-[100%]" src={url} alt="image" />;
            })}
          </div>
        </MotionYContainer>
      </div>
    </section>
  );
};

export default TaxBanner;
