import projects from '/src/data/projects.json';
import Thumbnail from './Thumbnail';
import Icon from './Icon';
import Button from './Button';

const Project = () => {
  return (
    <div className="card-wrapper">
      {projects.map((project) => (
        <figure key={project.id} className="reveal-left">
          <Thumbnail thumbnail={project.thumbnail} description={project.description} />
          <figcaption>
            <small>Tech stack:</small>
            <ul className="stack-icon">
              {project.stacks.map((stack, index) => (
                <Icon icon={stack} key={index} />
              ))}
            </ul>
            <Button preview={project.preview} repo={project.repo} />
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Project;
