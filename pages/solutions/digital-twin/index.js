import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import DigitalTwinBanner from '@layouts/components/digital-twin/DigitalTwinBanner';
import WhatIs from '@layouts/components/digital-twin/WhatIs';
import StartSharing from '@layouts/components/home/StartSharing';

const DigitalTwinPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <DigitalTwinBanner />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <WhatIs />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default DigitalTwinPage;
