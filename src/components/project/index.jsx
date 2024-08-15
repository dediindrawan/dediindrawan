import Project from './Project';
import Testimony from './Testimony';

const ProjectContent = () => {
  return (
    <>
      <section id="project" className="project">
        <h1 className="section-title">Highlight Projects</h1>
        <article className="reveal-bottom">Here are some of the projects that showcase my journey and growth in web development, each demonstrating my commitment to creating impactful and innovative web solutions.</article>

        <Project />
        <Testimony />
      </section>
    </>
  );
};

export default ProjectContent;
