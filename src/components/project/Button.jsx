import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Button = ({ preview, repo }) => {
  return (
    <ul className="button-action">
      <li>
        <a href={preview} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          Preview
        </a>
      </li>
      <li>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileCode} className="mr-2" />
          Repository
        </a>
      </li>
    </ul>
  );
};

export default Button;
