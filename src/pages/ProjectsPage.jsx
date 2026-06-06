import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const navigate = useNavigate();

  // Redirect to home page with projects hash
  useEffect(() => {
    navigate('/#projects', { replace: true });
  }, [navigate]);

  return null;
}
