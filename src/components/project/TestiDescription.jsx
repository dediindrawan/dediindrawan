import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const TestiDescription = ({ clientName, title, instagramUrl, instagramName }) => {
  return (
    <span>
      <h1>{clientName}</h1>
      <small>{title}</small>
      <span>
        <a href={instagramUrl} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="mr-1" />
          {instagramName}
        </a>
      </span>
    </span>
  );
};

export default TestiDescription;
