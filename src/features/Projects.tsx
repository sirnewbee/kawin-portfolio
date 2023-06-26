import React, { useEffect } from "react";
import { toggleTransition } from '../global/AnimationScripts';

const Projects = () => {
  useEffect(() => {
    toggleTransition('projects');
  }, []);

  return (
    <div id="projects" className="transition-container">
      Projects
    </div>
  );
}

export default Projects;