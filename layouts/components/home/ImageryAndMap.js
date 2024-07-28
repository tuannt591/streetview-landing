import React from 'react';
import { Typography } from '@material-tailwind/react';

const LIST = [
  {
    photo: 'images/imagery.png',
    title: 'Imagery',
    description: 'Use Mapilio public imagery. You don’t need a license for imagery you contributed.',
  },
  {
    photo: 'images/object_detection.png',
    title: 'Object Detections',
    description: 'Find images that show certain objects. You’ll get a dataset of image locations.',
  },
  {
    photo: 'images/map_feature.png',
    title: 'Map Feature',
    description: 'Position objects automatically on the map. You’ll get a dataset of object locations.',
  },
];

const ImageryAndMap = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-[50px] text-center">
          <Typography variant="h5" className="font-medium text-orange-400">
            FAST AND ACCURATE DATA
          </Typography>
          <Typography variant="h2" className="mb-2 text-5xl font-medium">
            Imagery and Map data
          </Typography>
          <Typography variant="paragraph" className="text-lg text-gray-600">
            Access street-level imagery and map data from all over the world. Fill in the gaps by capturing coverage
            yourself
          </Typography>
        </div>

        <div className="grid grid-cols-1 items-center justify-between lg:grid-cols-3 lg:gap-6">
          {LIST.map((item, index) => {
            return (
              <div
                key={index}
                className="hover-transform-translateY rounded-lg bg-white p-4 text-center max-lg:mb-5 lg:h-full"
                style={{ boxShadow: '0px 2px 4px #00000029' }}
              >
                <div className="flex items-end justify-center">
                  <img src={item.photo} alt="image" />
                </div>
                <Typography variant="h3" className="mb-4 mt-4 text-xl font-medium">
                  {item.title}
                </Typography>
                <Typography variant="paragraph" className="text-base text-gray-600">
                  {item.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageryAndMap;
