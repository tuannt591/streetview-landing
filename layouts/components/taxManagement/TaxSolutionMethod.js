import React from 'react';
import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';

const TaxSolutionMethod = () => {
  const router = useRouter();

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <Typography variant="h2" className="mb-3">
            Solution Methods
          </Typography>
          <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
            The algorithm automatically calculates shop signs by analyzing panoramic images taken at street level and
            records the amount of tax each taxpayer has to pay.
          </Typography>
        </div>

        <div className="relative mt-10 flex flex-wrap items-center rounded-[12px] bg-[#0056F1]">
          <div className="w-[100%] p-5 md:w-[50%]">
            <img src="/images/smartax-topcard.png" alt="smartax-topcard" className="smartax-topcard" />
          </div>

          <div className="w-[100%] p-[20px] md:w-[50%]">
            <div>
              <Typography variant="h3" className="mb-3 font-medium text-white">
                Avoid Observation Based Errors
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-white">
                The method of calculating signage based on human observation is always prone to errors. Get a reliable
                and error-free database with AI Technology
                <br /> We provide position and area calculation with centimeter precision at a rate of 90%.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxSolutionMethod;
