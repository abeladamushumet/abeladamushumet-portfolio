import { GITHUB_USERNAME, GITHUB_API_BASE } from '../utils/constants';

const token = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  Accept: 'application/vnd.github+json',
  ...(token && token !== 'your_github_token_here_optional' ? { Authorization: `Bearer ${token}` } : {}),
};

/**
 * Fetch public repositories for the configured GitHub user.
 * @param {number} perPage - max repos to fetch
 * @returns {Promise<Array>} - array of repo objects
 */
export async function fetchGithubRepos(perPage = 20) {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${perPage}&type=public`,
      { headers }
    );
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const repos = await response.json();
    return repos
      .filter((r) => !r.fork)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description || 'No description provided.',
        url: r.html_url,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        updatedAt: r.updated_at,
        topics: r.topics || [],
      }));
  } catch (error) {
    console.error('GitHub API fetch error:', error);
    return [];
  }
}

/**
 * Fetch GitHub user profile info.
 * @returns {Promise<Object|null>}
 */
export async function fetchGithubProfile() {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
      { headers }
    );
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const data = await response.json();
    return {
      login: data.login,
      name: data.name,
      bio: data.bio,
      avatar: data.avatar_url,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      url: data.html_url,
    };
  } catch (error) {
    console.error('GitHub profile fetch error:', error);
    return null;
  }
}
