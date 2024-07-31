import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { paths } from 'constants/paths';
import { useRouter } from 'next/router';

const StartSharing = () => {
  const router = useRouter();

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
          <div className="mx-auto mt-5 grid grid-cols-2 items-center justify-center gap-4 gap-4 md:w-[350px]">
            <Button variant="filled" size="lg" color="blue" className="rounded-full p-[15px] font-normal normal-case">
              Create account
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="rounded-full p-[15px] font-normal normal-case"
              onClick={() => router.push(paths.contact)}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSharing;
