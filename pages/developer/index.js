import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { Typography, Button } from '@material-tailwind/react';
import { MotionYContainer } from '@components/Motion';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';
import Typewriter from 'typewriter-effect';

const DATA = [
  {
    title: 'APIs',
    description:
      'Set of powerful, cross-platform APIs which allow you to interact with various aspects of Mapilio data and build upon it.',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Developer first',
    description:
      'Easy and powerful cross-platform API. Interact with images, sequences, changesets, map objects, image detections and users',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Cross platform support',
    description: 'Rapid application development for Desktop, Web and Mobile',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: 'Streetview embed',
    description: 'Add Streetview images to a web site or app with the Mapilio embed.',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
];

const DeveloperPage = () => {
  const { title } = config.site;
  const router = useRouter();

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container">
          <section className="section">
            <div className="developer-title relative">
              <div className="p-5 text-center">
                <Typography variant="h2" className="mb-5 text-5xl">
                  Building applications with
                  <br />
                  Streetview APIs
                </Typography>
                <Typography variant="paragraph" className="text-lg">
                  {`Create your application with using Streetview's APIs to generate`}
                  <br />
                  machine-generated and street-level imagery map features
                </Typography>
                <div className="mx-auto mt-5 grid grid-cols-2 items-center justify-center gap-4 md:w-[350px]">
                  <Button variant="filled" size="lg" color="blue" className="p-[15px] font-normal normal-case">
                    View on github
                  </Button>
                  <Button variant="outlined" size="lg" className="p-[15px] font-normal normal-case">
                    Document
                  </Button>
                </div>
              </div>

              <div className="mx-auto mt-8 flex h-[88px] items-center rounded-[4px] bg-[#36474f] px-[15px] text-white lg:w-[600px]">
                {`~$ >`}&nbsp;
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 10,
                  }}
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(1000)
                      .typeString('streetview_uploader authenticate')
                      .pauseFor(1500)
                      .deleteChars(12)
                      .typeString('process')
                      .pauseFor(1500)
                      .deleteChars(7)
                      .typeString('upload "path/to/images/"')
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>
            </div>

            <div className="mt-[50px] grid grid-cols-1 gap-4 md:grid-cols-2">
              {DATA.map((item, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e8eefe] text-[#0056F1]">
                      {item.icon}
                    </div>
                    <div className="flex-1 pl-[15px]">
                      <Typography className="text-lg font-semibold">{item.title}</Typography>
                      <Typography className="text-base">{item.description}</Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </MotionYContainer>
    </Base>
  );
};

export default DeveloperPage;
