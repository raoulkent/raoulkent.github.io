import React from 'react';
import Jdenticon from 'react-jdenticon';

const ProjectIcon = ({iconSize=150, projectName}) => {

    return (
        <div>
            <Jdenticon size={iconSize} value={projectName}/>
        </div>
    );
}

export default ProjectIcon;