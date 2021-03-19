import React from 'react';
import Jdenticon from 'react-jdenticon';

const ProjectIcon = ({sideLength=150, projectName}) => {

    return (
        <div>
            <Jdenticon size={sideLength} value={projectName}/>
        </div>
    );
}

export default ProjectIcon;