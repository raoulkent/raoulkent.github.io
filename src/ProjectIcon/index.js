import React from 'react';
import Jdenticon from 'react-jdenticon';

const ProjectIcon = ({sideLength=150, projectName}) => {

    return (
        <Jdenticon size={sideLength} value={projectName} />
    );
}

export default ProjectIcon;
