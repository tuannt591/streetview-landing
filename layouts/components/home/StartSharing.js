import React from 'react';
import { Typography, Button } from '@material-tailwind/react';

const StartSharing = () => {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(236, 236, 236, 0.5)' }}>
      <div className="container">
        <div>
          <Typography variant="h3" className="mb-2 text-center text-4xl font-medium">
            Start sharing images and accessing map data now.
          </Typography>
          <Typography variant="paragraph" className="text-center text-base text-gray-600">
            Streetview is an independent provider of street-level imagery and map data, not affiliated with
            OpenStreetMap or any specific map platform.
          </Typography>
          <div className="mt-5 flex justify-center gap-4">
            <Button variant="filled" size="lg" color="blue" className="rounded-full">
              Create account
            </Button>
            <Button variant="outlined" size="lg" className="rounded-full">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSharing;
