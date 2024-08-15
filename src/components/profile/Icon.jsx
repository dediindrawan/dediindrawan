import icons from '/src/data/skills.json';

const Icon = () => {
  return (
    <ul className="reveal-left">
      {icons.map((icon) => (
        <li key={icon.id}>
          <img src={icon.icon} alt="icon" loading="lazy" />
        </li>
      ))}
    </ul>
  );
};

export default Icon;
