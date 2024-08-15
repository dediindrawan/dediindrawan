import navlinks from '/src/data/navlinks.json';

const Menu = ({ navlinkRef }) => {
  return (
    <ul className="navlink" ref={navlinkRef}>
      {navlinks.map((navlink) => (
        <li key={navlink.id}>
          <a href={navlink.path}>{navlink.section}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
