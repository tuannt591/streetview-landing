import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';

const AutonomousPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container">
          <section className="section">Autonomous</section>
        </div>
      </MotionYContainer>
    </Base>
  );
};

export default AutonomousPage;
