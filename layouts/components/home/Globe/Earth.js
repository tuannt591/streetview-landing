import React from 'react';
import { RADIUS, ROTATION } from 'utils/globe';

const Earth = () => (
  <mesh rotation={ROTATION}>
    <sphereGeometry args={[RADIUS, 32, 32]} />
    <meshBasicMaterial color="#f2f3f5" />
  </mesh>
);

export default Earth;
