import React from 'react'
import ProjectIcon from '../ProjectIcon/';
import CardTitle from '../CardTitle/';

const ProjectCard = ({projectName}) => {
  
  return (
    <div>
      <CardTitle>{projectName}</CardTitle>
      <ProjectIcon projectName={projectName}/>
    </div>
  )
}

export default ProjectCard