import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

const LIST_SLIDE = [
  {
    photo: 'images/slider1-img.png',
    title: 'Capture and upload',
    description:
      'Streetview is a platform consisting of images made by individuals. Contribute to the strengthening of our community and the improvement of the quality of our maps. Both individuals and organizations can benefit from these inputs.',
  },
  {
    photo: 'images/slider2-img.png',
    title: `Take advantage of others' contributions`,
    description: `Benefit from the platform's overall database, which gets richer as each member contributes. Like a sports team, every individual's performance makes your life easier.`,
  },
  {
    photo: 'images/slider3-img.png',
    title: `Make a global impact`,
    description: `Let the database of members' images contribute to common mapping applications used around the world, like OpenStreetMap let's make sure everyone has access to better maps.`,
  },
];

const OpenData = () => {
  return (
    <section className="section relative">
      <div className="container">
        <div className="mb-[50px] text-center">
          <Typography variant="h5" className="font-medium text-orange-400">
            OPEN MAP DATA
          </Typography>
          <Typography variant="h2" className="mb-2 text-5xl font-medium">
            Open data with <span className="text-blue-700">Streetview</span>
          </Typography>
          <Typography variant="paragraph" className="text-lg text-gray-600">
            Contribute and make publicly available your street-level image and map data on the Mapilio platform. Data
            available on the map platform <a href="">OpenstreetMap</a>
          </Typography>
        </div>

        <Swiper
          className="swiperBox max-sm:h-[630px] md:h-[290px] md:pr-[34px] lg:h-[450px]"
          speed={1000}
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          mousewheel={{ enabled: true, releaseOnEdges: true }}
          breakpoints={{
            640: {
              direction: 'horizontal',
            },
            768: {
              direction: 'vertical',
            },
          }}
        >
          {LIST_SLIDE.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 md:gap-20">
                  <div className="max-md:mb-[30px]">
                    <img src={item.photo} alt="image" />
                  </div>
                  <div>
                    <Typography variant="h3" className="mb-2 text-4xl font-medium">
                      {item.title}
                    </Typography>
                    <Typography variant="paragraph" className="text-base text-gray-600">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OpenData;
