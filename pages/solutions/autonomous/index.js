import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import AutonomousBanner from '@layouts/components/autonomous/AutonomousBanner';
import AutoSolutionMethod from '@layouts/components/autonomous/AutoSolutionMethod';
import AutoAlwaysThe from '@layouts/components/autonomous/AutoAlwaysThe';
import AutoSafety from '@layouts/components/autonomous/AutoSafety';
import StartSharing from '@layouts/components/home/StartSharing';

const AutonomousPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <AutonomousBanner />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <AutoSolutionMethod />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <AutoAlwaysThe />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <AutoSafety />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 1.0, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>
    </Base>
  );
};

export default AutonomousPage;
