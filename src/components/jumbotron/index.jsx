import Socials from '../social';

const Jumbotron = () => {
  return (
    <div className="wrapper">
      <h1 className="fade-in-top">Dedi Indrawan</h1>
      <h2 className="fade-in-top">Front End Developer & Content Creator</h2>
      <p className="fade-in-top">
        <strong>Front End Developer</strong> with 1+ years of experience creating responsive and user friendly websites using React.js, TailwindCSS, JavaScript, and continuously enhancing skills in React.js to build more dynamic and
        efficient web applications.
      </p>

      <ul className="fade-in-bottom">
        <Socials />
      </ul>
    </div>
  );
};

export default Jumbotron;
