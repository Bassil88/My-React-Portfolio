import projectData from "./projectsData/projectData";


export const Projects = () => {
  const handleMouseEnter = (index) => {
    const hoverText = document.querySelectorAll('.hover-text h2');
    hoverText[index].style.opacity = '1';
    hoverText[index].style.transform = 'scale(1)';
  };

  const handleMouseLeave = (index) => {
    const hoverText = document.querySelectorAll('.hover-text h2');
    hoverText[index].style.opacity = '0';
    hoverText[index].style.transform = 'scale(0.8)';
  };

  return (
    <div id="projects" className="project-main-container">
      <div className="project-box">
        {projectData.map((project, index) => (
          <div className="p-box-column" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
            <div className="p-sub-box">
              <div className="inner-sub-box">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
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
