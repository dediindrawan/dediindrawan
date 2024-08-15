import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ isMenuActive, toggleHandleClick, toggleMenuRef }) => {
  return (
    <button className="toggle-menu" ref={toggleMenuRef} onClick={toggleHandleClick}>
      {!isMenuActive ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
    </button>
  );
};

export default Toggle;
