import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { Typography, Button } from '@material-tailwind/react';
import { MotionYContainer } from '@components/Motion';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';

const LIST_IMAGE = [
  {
    url: 'images/about1.png',
    col: '1',
    row: '2',
  },
  {
    url: 'images/about2.png',
    col: '2',
    row: '1',
  },
  {
    url: 'images/about4.png',
    col: '1',
    row: '1',
  },
  {
    url: 'images/about5.png',
    col: '2',
    row: '1',
  },
  {
    url: 'images/about3.png',
    col: '1',
    row: '1',
  },
];

const AboutUsPage = () => {
  const { title } = config.site;
  const router = useRouter();

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container">
          <section className="section">
            <div className="about-us-title relative">
              <div className="p-5 text-center">
                <Typography variant="paragraph" className="text-lg font-medium text-gray-600">
                  ABOUT US
                </Typography>
                <Typography variant="h2" className="mb-5 text-5xl">
                  About Streetview
                </Typography>
                <Typography variant="paragraph" className="text-lg">
                  Streetview is the platform that makes street-level images and map data available to scale and automate
                  mapping.
                </Typography>
              </div>
            </div>

            <div className="about-gallery mt-20 grid h-[400px] grid-flow-col grid-cols-2 grid-rows-2 gap-4 lg:h-[600px] lg:grid-cols-4">
              {LIST_IMAGE.map((item, index) => {
                const lastIndexItem = LIST_IMAGE.length - 1;
                return (
                  <div key={index} className={`item-${index + 1}`}>
                    <img
                      className="h-full w-full max-w-full rounded-lg object-cover object-center"
                      src={item.url}
                      alt="gallery-photo"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-20 text-center md:flex md:justify-center">
              <div className="px-10 py-5">
                <Typography variant="paragraph" className="mb-3 text-5xl font-medium">
                  4YRS
                </Typography>
                <Typography variant="paragraph" className="font-normal text-gray-600">
                  in business.
                </Typography>
              </div>
              <div className="px-10 py-5">
                <Typography variant="paragraph" className="mb-3 text-5xl font-medium">
                  90K
                </Typography>
                <Typography variant="paragraph" className="font-normal text-gray-600">
                  90.000KM
                </Typography>
              </div>
              <div className="px-10 py-5">
                <Typography variant="paragraph" className="mb-3 text-5xl font-medium">
                  98%
                </Typography>
                <Typography variant="paragraph" className="font-normal text-gray-600">
                  with 98% success
                </Typography>
              </div>
            </div>

            <div className="mt-10">
              <div className="p-5 text-center">
                <Typography variant="paragraph" className="text-lg font-medium text-gray-600">
                  OUR STORY
                </Typography>
                <Typography variant="h2" className="mb-5 text-4xl">
                  Who we are
                </Typography>
              </div>
              <Typography variant="paragraph" className="text-lg">
                {`We are a team coming together to make the world a better place for ourselves and others. When we needed to gather in the same room physically as a team, we realized how many obstacles, details or possible surprises we faced on our way and decided to do something about it. That's how Mapilio was born.`}
                <br />
                <br />
                Streetview is a platform that allows users to upload photos of any location that provides you a better
                experience by mapping street-level visuals, scaling the collected data automatically and converts this
                data to map.
                <br />
                <br />
                Bringing together a global network of participants, Mapilio generates map data with artificial
                intelligence technologies by processing images from all equipment, from daily used smartphones or action
                cameras to 360-degree professional cameras! These up-to-date and detailed maps bring time and
                cost-saving!
                <br />
                <br />
                Since 2020, In more than 100 countries, we are making the world a better place for us and for you too.
              </Typography>
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                variant="filled"
                size="lg"
                color="blue"
                className="rounded-full normal-case"
                onClick={() => router.push(paths.contact)}
              >
                Contact us
              </Button>
            </div>
          </section>
        </div>
      </MotionYContainer>
    </Base>
  );
};

export default AboutUsPage;
