import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { Typography, Button } from '@material-tailwind/react';
import { MotionYContainer } from '@components/Motion';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';
import Typewriter from 'typewriter-effect';

const LicensesPage = () => {
  const { title } = config.site;
  const router = useRouter();

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container">
          <section className="section">
            <div>
              <Typography variant="h2" className="mb-5 text-center text-5xl">
                Streetview Licenses
              </Typography>
              <Typography variant="paragraph" className="text-lg">
                {`By contributing images to Streetview Database, you are providing them under Streetview's terms and conditions, `}
                <a href={paths.terms} className="font-medium text-blue-700">
                  which you can find here.
                </a>
                <br />
                <br />
                Any images on Streetview are released under a CC-BY-SA license, which simply means that everyone can
                view, share, distribute and even slightly edit the images as long as they give credit to them.
                <br />
                <br />
                When you upload images to Streetview, you grant Streetview the right to use these images commercially.
                However, you still retain the ownership of these imagery.
              </Typography>
            </div>

            <div className="my-10 flex justify-center">
              <img src="/images/licenses.png" alt="licenses" />
            </div>
            <Typography variant="paragraph" className="text-center text-lg">
              For futher questions on licenses, do not hesitate to contact us anytime via{' '}
              <a className="font-medium text-blue-700" href="mailto:info@mapilio.com">
                info@mapilio.com
              </a>
            </Typography>
          </section>
        </div>
      </MotionYContainer>
    </Base>
  );
};

export default LicensesPage;
