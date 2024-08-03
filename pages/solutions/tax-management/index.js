import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import TaxBanner from '@layouts/components/taxManagement/TaxBanner';
import TaxSolutionMethod from '@layouts/components/taxManagement/TaxSolutionMethod';
import AlwaysHave from '@layouts/components/taxManagement/AlwaysHave';
import GetBetter from '@layouts/components/taxManagement/GetBetter';
import StartSharing from '@layouts/components/home/StartSharing';

const TaxManagementPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <TaxBanner />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <TaxSolutionMethod />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <AlwaysHave />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <GetBetter />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 1.0, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default TaxManagementPage;
