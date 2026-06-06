import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { filterProjects } from '../../utils/filterProjects';
import { FILTER_CATEGORIES, GITHUB_USERNAME } from '../../utils/constants';
import projectsData from '../../data/projects.json';


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = filterProjects(projectsData, activeFilter);
  const displayed = filtered.filter((p) => p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">🚀 Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications of data science and machine learning
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters" role="group" aria-label="Project category filters">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayed.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* All Projects Link */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="show-all-projects-btn"
          >
            All Projects
          </a>
        </div>


      </div>
    </section>
  );
}
