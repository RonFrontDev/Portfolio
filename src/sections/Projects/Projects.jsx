import Project from "../../components/Project/Project";
import "./Projects.scss";
import projectsData from "../../projectsData.json";

function Projects() {
  console.log(projectsData);
  return (
    <div id="projects" className="projects">
      <div className="projects__header">
        <h2 className="projects__headline">Projects</h2>
        <p className="projects__subtitle">
          Each project is a unique piece of development
        </p>
      </div>
      {projectsData.map((projectData) => (
        <Project key={projectData.id} data={projectData} />
      ))}
    </div>
  );
}

export default Projects;
