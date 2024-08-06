import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { Typography, Button } from '@material-tailwind/react';
import { MotionYContainer } from '@components/Motion';
import { useRouter } from 'next/router';
import StartSharing from '@layouts/components/home/StartSharing';

const OpenStreetMapPage = () => {
  const { title } = config.site;
  const router = useRouter();

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <section className="section">
          <div className="container">
            <div className="text-center">
              <Typography variant="h5" className="font-medium uppercase text-orange-400">
                OpenStreetMap & streetview loyalty
              </Typography>
              <Typography variant="h2" className="mb-5 text-4xl md:text-5xl">
                We are OpenStreetMap
                <br />
                Open Data Provider
              </Typography>
              <Typography variant="paragraph" className="text-lg">
                Data collected by the Streetview community can be used by anyone with the OpenStreetMap platform.
              </Typography>
              <div className="mx-auto mt-5 grid grid-cols-1 items-center justify-center gap-4 md:w-[160px]">
                <Button
                  variant="filled"
                  size="lg"
                  color="blue"
                  className="rounded-full p-[15px] font-normal normal-case"
                  onClick={() => router.push(paths.contact)}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <section className="pb-[70px]">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-10 rounded-[20px] bg-[#f6f9fc] md:grid-cols-2">
              <div className="p-[30px]">
                <img src="/images/puzzlemap.png" alt="puzzlemap" />
              </div>
              <div>
                <Typography variant="h3" className="mb-3 font-medium">
                  OpenStreetMap Commitment
                </Typography>
                <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                  As Streetview, we are committed to supporting the OpenStreetMap community and continuing to do so. We
                  encourage hundreds of our users to make unique captures. In this way, while our community benefits
                  from making captures, we also collect unique data for OpenStreetMap that is available for everyone to
                  use. Strong Community & Up-to-Date Maps!
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <section className="pb-[70px]">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="max-md:order-2">
                <Typography variant="h3" className="mb-3 font-medium">
                  Rights for OpenStreetMap
                </Typography>
                <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                  {`All images on Mapilio are published under a CC-BY-SA license, which means anyone can view, share,
                  distribute, and even lightly edit images as long as they cite the source. Similarly, you have the
                  right to use, share, and lightly edit Streetview's images to create content for OpenStreetMap. Please
                  check the Terms for more information.`}
                </Typography>
              </div>
              <div className="p-[30px] max-md:order-1">
                <img src="/images/mapilioandosm.png" alt="mapilioandosm" />
              </div>
            </div>
          </div>
        </section>
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <section className="pb-[70px]">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="p-[30px]">
                <img src="/images/osm_editor.png" alt="osm_editor" />
              </div>
              <div>
                <Typography variant="h3" className="mb-3 font-medium">
                  OSM & JOSM Under Development
                </Typography>
                <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                  {`If desired, the inputs such as roadworks, signs, and lights that users capture at street level on Mapilio will be displayed correctly and up-to-date on OpenStreetMap. We are currently heavily focused on this part in our beta application. This process will be completed as quickly as possible, with the first priority being the community's benefit through up-to-date and accurate data.`}
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 1.0, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default OpenStreetMapPage;
