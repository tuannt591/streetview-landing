import React from 'react';
import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';

const SolutionMethods = () => {
  const router = useRouter();

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <Typography variant="h2" className="mb-3">
            Solution Methods
          </Typography>
          <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
            The captured images are processed by artificial intelligence to create a comprehensive map with details such
            as roads, structures, buildings, new or closed routes, signs, traffic lights, road and speed restrictions.
          </Typography>
        </div>

        <div className="map-feature-topcard relative mt-10">
          <div className="map-feature-topcard-img">
            <img src="/images/mapfeature-topcard-bg.png" alt="mapfeature-topcard-bg" />
          </div>

          <div className="map-feature-topcard-cont">
            <div>
              <Typography variant="h3" className="mb-3 font-medium">
                No room for bad suprises
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                Are you frequently facing with unexpected circumstances during you journeys and it is getting annoying?
                Thanks to the data on the map, you can foresee situations such as road closures and traffic restrictions
                and adjust accordingly.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionMethods;
