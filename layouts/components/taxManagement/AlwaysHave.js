import React from 'react';
import { Typography } from '@material-tailwind/react';

const AlwaysHave = () => {
  return (
    <section className="pb-70">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10">
          <div className="max-md:order-2">
            <Typography variant="h3" className="mb-3 font-medium">
              Always Have Most Up-To-Date Data
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Having always actual data despite rapidly changing towns and in this example signs? Easy with Mapilio.
              After each capturing tours, get most up to date data, so that you can compare old and new taxation status.
            </Typography>
          </div>

          <div className="relative max-md:order-1">
            <img src="/images/after.png" alt="after" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysHave;
