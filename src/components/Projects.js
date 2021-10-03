import Projects1 from "./projects/projects1";
import Projects2 from "./projects/projects2";
import Projects3 from "./projects/projects3";

const Projects= () => {
return (
    <div>
      <div>
    <h1>Projects</h1>
<div>Here are my top 3 apps </div>
    <div className="projects">
        <Projects1 />
        <Projects2 />
        <Projects3 />
      </div>
        </div>
</div>
);
}

export default Projects;