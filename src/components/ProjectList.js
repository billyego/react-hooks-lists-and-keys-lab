import React from "react";
// import ProjectItem from "./ProjectItem"; // Remove this line if not needed

function ProjectList({ projects }) {
  console.log(projects);
  const projectsList = projects.map((project) => (
    <span key={project.id}>{project.name}</span>
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsList}</div>
    </div>
  );
}

export default ProjectList;
