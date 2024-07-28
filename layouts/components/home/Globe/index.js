import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from './Earth';
import Land from './Land';
import Marker from './Marker';
import countries from '@config/countries.json';

const Globe = () => {
  const { cities } = countries;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: isMobile ? 2 : 2.5 }} resize>
      <Earth />
      <Land />
      {cities.map(city => (
        <Marker key={city.geonameId} city={city} />
      ))}
      <OrbitControls enablePan enableRotate autoRotate enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
