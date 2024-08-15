import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UserProfile from '../user-profile';

const Contact = () => {
  return (
    <UserProfile>
      <span>
        <h1>Send me an email:</h1>
        <a href="mailto:dediindrawan218@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
          dediindrawan218@gmail.com
        </a>
      </span>
    </UserProfile>
  );
};

export default Contact;
