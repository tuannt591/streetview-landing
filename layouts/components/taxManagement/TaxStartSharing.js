import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { paths } from 'constants/paths';
import { useRouter } from 'next/router';

const TaxStartSharing = () => {
  const router = useRouter();

  return (
    <section className="tax-start-sharing relative" style={{ backgroundColor: 'rgba(236, 236, 236, 0.5)' }}>
      <img src="/images/smartax-footer.png" alt="smartax-footer" className="smartax-footer" />

      <div className="container">
        <div>
          <Typography variant="h3" className="mb-2 text-center text-4xl font-medium">
            Start sharing images and accessing map data now.
          </Typography>
          <Typography variant="paragraph" className="text-center text-base text-gray-600">
            Streetview is an independent and unbiased provider of street-level imagery and map data, not affiliated with
            any particular map platform.
          </Typography>
          <div className="mx-auto mt-5 grid grid-cols-2 items-center justify-center gap-4 md:w-[350px]">
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

export default TaxStartSharing;
