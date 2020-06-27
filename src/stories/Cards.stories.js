import React from 'react';
import { PositionCard } from '../components/Cards/PositionCard/PositionCard';
import { ProjectCard } from '../components/Cards/ProjectCard/ProjectCard';
export default { title: 'Cards' };

const position = {
  title: 'iOS Developer',
  project: 'Dream Team project name',
  customer: 'Startup Jam Inc.',
  skills: ['Swift', 'Xcode'],
  startDate: 'July 6, 2020',
  duration: 'Duration',
  applicants: 'number'
}

const project = {
  title: 'Dream team project name',
  stage: 'MVP',
  customer: 'Startup Jam Inc.',
  skills: ['Java', '.NET', 'CSS', 'UX'],
  peopleApplied: 3,
  teamCount: 24,
  startDate: 'July 6, 2020',
  description: 'Development of platform for the search for charity projects.'
}

export const Position = () => (
  <div style={{ margin: "0 10px" }}>
    <PositionCard position={position}/>
  </div>
);

export const Project = () => (
  <div style={{ margin: "0 10px" }}>
    <ProjectCard project={project}/>
  </div>
)

