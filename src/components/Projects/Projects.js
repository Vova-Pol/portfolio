import React from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/constants';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Проекты</h2>
      <ul className="projects__projects-list">
        {PROJECTS.map((project) => (
          <li className="projects__list-item" key={project.title}>
            <ProjectCard cardData={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
