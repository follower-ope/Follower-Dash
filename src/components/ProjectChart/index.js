import React, { useState, useEffect } from 'react';
import { GetProjectDetails } from '../../services/ProjectService';

function ProjectChart({ projectId }) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      setProject(await GetProjectDetails(projectId));
      setLoading(false);
    };
    fetchProject();
  }, []);

  return loading ? <p>carregando</p> : <h1>{project.title}</h1>;
}

export default ProjectChart;
