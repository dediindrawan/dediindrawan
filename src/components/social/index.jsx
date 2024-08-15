import socials from '/src/data/socials.json';

const Socials = () => {
  return (
    <>
      {socials.map((social) => (
        <li key={social.id}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt="icon" />
          </a>
        </li>
      ))}
    </>
  );
};

export default Socials;
