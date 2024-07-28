import React from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

const LIST_LOGO = [
  '/images/google_map_logo.svg',
  '/images/map_esri.svg',
  '/images/map_here.svg',
  '/images/map_mapbox.svg',
  '/images/map_tomtom.svg',
];

const Banner = () => {
  return (
    <section style={{ backgroundColor: 'rgba(236, 236, 236, 0.5)' }} className="md:pb-70px relative pt-[50px]">
      <div className="container relative z-[2]">
        <Swiper
          className="swiperBox max-sm:h-[550px] md:h-[480px] md:pr-[34px]"
          // direction={'vertical'}
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
          <SwiperSlide>
            <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-20">
              <div>
                <Typography variant="h2" className="mb-3 text-5xl">
                  Make smart maps
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-3 text-lg text-gray-600"
                >{`Streetview's platform creates smart map data using street-level images.`}</Typography>
                <Typography className="text-lg text-black">Join over 5000 subscribers for our newsletter</Typography>
                <div className="mb-10 mt-5 md:flex md:items-center">
                  <Input
                    size="lg"
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-3xl !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: 'hidden',
                    }}
                    containerProps={{ className: 'md:mr-[15px] md:flex-1 max-sm:mb-[15px]' }}
                  />
                  <Button color="blue" className="w-full rounded-full font-normal normal-case md:w-[130px]" size="lg">
                    Subscribe
                  </Button>
                </div>
                <div>
                  <Typography className="text-base text-gray-600">Supports industry leading companies</Typography>
                  <div className="flex">
                    {LIST_LOGO.map((url, index) => {
                      return <img key={index} className="mx-2" src={url} alt="image" />;
                    })}
                  </div>
                </div>
              </div>
              <div className="max-md:hidden">
                <img src="/images/mapilio_gif.webp" alt="image" className="rounded-2xl" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-20">
              <div>
                <Typography variant="h2" className="mb-3 text-5xl">
                  Contribute Now!
                </Typography>
                <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                  Capture, upload, and support current maps while earning various rewards.
                </Typography>
                <div className="mb-10 mt-5 flex items-center">
                  <a href="">
                    <img className="mx-2" src="/images/app_store_black.svg" alt="image" />
                  </a>
                  <a href="">
                    <img className="mx-2" src="/images/goole_play_black.svg" alt="image" />
                  </a>
                </div>
                <div>
                  <Typography className="text-base text-gray-600">Supports industry leading companies</Typography>
                  <div className="flex">
                    {LIST_LOGO.map((url, index) => {
                      return <img key={index} className="mx-2" src={url} alt="image" />;
                    })}
                  </div>
                </div>
              </div>
              <div className="max-md:hidden">
                <img src="/images/home-slider-hand.png" alt="image" className="rounded-2xl" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <svg
        className="svgWhite"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
      >
        <polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
      </svg>
    </section>
  );
};

export default Banner;
