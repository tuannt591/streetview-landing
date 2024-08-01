import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import EnergyBanner from '@layouts/components/energy/EnergyBanner';
import EnergySolutionMethod from '@layouts/components/energy/EnergySolutionMethod';
import ViewThe from '@layouts/components/energy/ViewThe';
import PreventiveApproach from '@layouts/components/energy/PreventiveApproach';
import StartSharing from '@layouts/components/home/StartSharing';

const EnergyPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <EnergyBanner />

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <EnergySolutionMethod />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <ViewThe />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <PreventiveApproach />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 1.0, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default EnergyPage;
