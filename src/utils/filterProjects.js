/**
 * Filter projects by category
 * @param {Array} projects - array of project objects
 * @param {string} filter - category filter string
 * @returns {Array} - filtered projects
 */
export function filterProjects(projects, filter) {
  if (!filter || filter === 'All') return projects;
  return projects.filter(
    (p) =>
      p.filter?.includes(filter) ||
      p.category?.toLowerCase().includes(filter.toLowerCase())
  );
}

/**
 * Get featured projects
 * @param {Array} projects
 * @returns {Array}
 */
export function getFeaturedProjects(projects) {
  return projects.filter((p) => p.featured);
}
