import { useState, useEffect } from 'react';
import { fetchGithubRepos, fetchGithubProfile } from '../services/github';

const cache = { repos: null, profile: null, timestamp: null };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function useGithub() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Use cache if fresh
      const now = Date.now();
      if (cache.repos && cache.timestamp && now - cache.timestamp < CACHE_TTL) {
        setRepos(cache.repos);
        setProfile(cache.profile);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const [reposData, profileData] = await Promise.all([
          fetchGithubRepos(20),
          fetchGithubProfile(),
        ]);

        cache.repos = reposData;
        cache.profile = profileData;
        cache.timestamp = now;

        setRepos(reposData);
        setProfile(profileData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { repos, profile, loading, error };
}
