import React from 'react';
import { Typography } from '@material-tailwind/react';

const MakeSmartMaps = () => {
  const styleObj = {
    backgroundColor: '#0056F1',
    backgroundImage: 'url(images/ads-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  };

  return (
    <section style={styleObj} className="pt-[70px]">
      <div className="container">
        <div className="grid grid-cols-1 items-end justify-between md:grid-cols-2 md:gap-20">
          <div>
            <Typography variant="h2" className="mb-3 text-5xl text-white">
              Make smart maps
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-white">
              Streetview is the platform that makes street-level images and map data available to scale and automate
              mapping.
            </Typography>
            <div className="mb-10 mt-5 grid grid-cols-2 items-center gap-4 lg:w-[75%]">
              <a href="">
                <img className="w-full" src="/images/app_store_black.svg" alt="image" />
              </a>
              <a href="">
                <img className="w-full" src="/images/goole_play_black.svg" alt="image" />
              </a>
            </div>
          </div>
          <div>
            <img src="/images/footer-phone-web.png" alt="image" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeSmartMaps;
