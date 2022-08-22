import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import SolarSystemObjects from "./SolarSystemObjects";

interface ISolarSystemProps {}

const SolarSystem: FunctionComponent<ISolarSystemProps> = () => {
  return (
    <div>
      Babylon.js Solar System
      <Engine antialias adaptToDeviceRatio>
        <Scene>
          <SolarSystemObjects />
        </Scene>
      </Engine>
    </div>
  );
};

export default SolarSystem;
