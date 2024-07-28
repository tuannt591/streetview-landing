import React, { useMemo } from 'react';
import { CatmullRomCurve3, TextureLoader } from 'three';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

import { polar2Cartesian, RADIUS, toVector, ROTATION } from 'utils/globe';

const Marker = ({ city }) => {
  const { lat, lng, flag, name } = city;

  const curve = useMemo(() => {
    const s = toVector(lat, lng, RADIUS);
    const e = toVector(lat, lng, RADIUS + 5);

    return new CatmullRomCurve3([s, e]);
  }, [lat, lng]);

  const point = useMemo(() => {
    const p = polar2Cartesian(lat, lng, RADIUS + 5);

    return [p.x, p.y, p.z];
  }, [lat, lng]);

  return (
    <mesh rotation={ROTATION}>
      <mesh position={point}>
        <tubeGeometry args={[curve, 44, 0.3, 8]} />
        {/* <planeGeometry args={[1, 0.5]} /> */}
        {/* <meshBasicMaterial map={useLoader(TextureLoader, flag)} /> */}

        <Html distanceFactor={1} occlude>
          <div className=" flex w-max cursor-pointer select-none items-center rounded-[2px] bg-white p-[1px]">
            <img src={flag} className="h-[10px] w-[10px]" />
            <span className="cursor-pointer select-none whitespace-nowrap text-[5px] text-slate-800">
              &nbsp;&nbsp;{name}
            </span>
          </div>
        </Html>
      </mesh>
      {/* <mesh position={point}>
        <sphereGeometry args={[0.3, 5, 5]} />
        <meshBasicMaterial color="blue" />
      </mesh> */}
    </mesh>
  );
};

export default Marker;
