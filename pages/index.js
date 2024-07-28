import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import Banner from '@layouts/components/home/Banner';
import GlobalSpread from '@layouts/components/home/GlobalSpread';
import WorkCamera from '@layouts/components/home/WorkCamera';
import CaptureUpload from '@layouts/components/home/CaptureUpload';
import LetAiSpeed from '@layouts/components/home/LetAiSpeed';
import CaptureYour from '@layouts/components/home/CaptureYour';
import CheckoutBest from '@layouts/components/home/CheckoutBest';
import OpenData from '@layouts/components/home/OpenData';
import Questions from '@layouts/components/home/Questions';
import ImageryAndMap from '@layouts/components/home/ImageryAndMap';
import MakeSmartMaps from '@layouts/components/home/MakeSmartMaps';
import StartSharing from '@layouts/components/home/StartSharing';
import ScrollToTopButton from '@layouts/components/ScrollToTopButton';
import { MotionXContainer, MotionYContainer } from '@components/Motion';

const HomePage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <Banner />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <GlobalSpread />
      </MotionYContainer>

      <MotionXContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <WorkCamera />
      </MotionXContainer>

      <MotionXContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <CaptureUpload />
      </MotionXContainer>

      <MotionXContainer transition={{ delay: 0.6, duration: 0.5 }}>
        <LetAiSpeed />
      </MotionXContainer>

      <MotionXContainer transition={{ delay: 0.8, duration: 0.5 }}>
        <CaptureYour />
      </MotionXContainer>

      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <CheckoutBest />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.4, duration: 0.5 }}>
        <OpenData />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <Questions />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <ImageryAndMap />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <MakeSmartMaps />
      </MotionYContainer>

      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <StartSharing />
      </MotionYContainer>

      <ScrollToTopButton />
    </Base>
  );
};

export default HomePage;
