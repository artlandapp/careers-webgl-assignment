import React, { FunctionComponent, useMemo } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";

interface ISolarSystemProps {}

const SolarSystem: FunctionComponent<ISolarSystemProps> = () => {
  const lightDir = useMemo(() => new Vector3(-0.5, -1, -0.5), []);

  return (
    <div>
      Babylon.js Solar System
      <Engine antialias adaptToDeviceRatio>
        <Scene>
          <transformNode name="root_node">
            <directionalLight name="main_light" direction={lightDir} />

            <arcRotateCamera
              name="main_camera"
              position={Vector3.ZeroReadOnly}
              alpha={1}
              beta={1}
              radius={5}
              target={Vector3.ZeroReadOnly}
            />

            <sphere name="sphere_mesh"></sphere>
          </transformNode>
        </Scene>
      </Engine>
    </div>
  );
};

export default SolarSystem;
