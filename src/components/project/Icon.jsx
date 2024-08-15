const Icon = ({ icon, index }) => {
  return (
    <li key={index}>
      <img src={icon} alt="icon" className="w-6" />
    </li>
  );
};

export default Icon;
