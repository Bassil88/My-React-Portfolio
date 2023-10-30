import projectData from "./projectsData/projectData";

export const Projects = () => {
  return (
    <div id="projects" className="project-main-container">
      <div className="work">
        <h2>Some of my Projects!</h2>
      </div>
      <div className="project-box">
        {projectData.map((project, index) => (
          <div key={index} className="p-box-column">
              <div className="p-sub-box">
                <div className="inner-sub-box">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.image} alt="Project Thumbnail" />
                  </a>
                </div>
              </div>
            <div className="hover-text">
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
