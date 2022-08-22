import { Vector3 } from "@babylonjs/core";
import { FunctionComponent, useMemo } from "react";

interface ISolarSystemObjectsProps {}

const SolarSystemObjects: FunctionComponent<ISolarSystemObjectsProps> = () => {
  const lightDir = useMemo(() => new Vector3(-0.5, -1, -0.5), []);

  return (
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

      <box name="box_mesh"></box>
    </transformNode>
  );
};

export default SolarSystemObjects;
