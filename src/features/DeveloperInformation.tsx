import React, { useEffect } from "react";
import { AnimationProps } from "../structures/DataTypes";
import { toggleTransition } from '../global/AnimationScripts';

const DeveloperInformation= () => {
  useEffect(() => {
    toggleTransition('dev-information');
  }, []);

  return (
    <div id="dev-information" className="transition-container">
      Developer information
    </div>
  );
}

export default DeveloperInformation;