import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import MapFeatureBanner from '@layouts/components/mapFeature/MapFeatureBanner';
import SolutionMethods from '@layouts/components/mapFeature/SolutionMethods';
import TinyDetails from '@layouts/components/mapFeature/TinyDetails';
import DataFor from '@layouts/components/mapFeature/DataFor';
import StartSharing from '@layouts/components/home/StartSharing';

const MapFuturePage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <MapFeatureBanner />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <SolutionMethods />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <TinyDetails />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <DataFor />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 1.0, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default MapFuturePage;
