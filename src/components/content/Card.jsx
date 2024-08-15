import contents from '/src/data/contents.json';
import Hyperlink from './Hyperlink';
import Thumbnail from '../content/Thumbnail';
import Description from './Description';

const Card = () => {
  return (
    <div className="card-wrapper">
      {contents.map((content) => (
        <figure key={content.id} className="reveal-left">
          <Hyperlink urlVideo={content.video}>
            <Thumbnail gif={content.gif} />
            <Description title={content.title} description={content.description} />
          </Hyperlink>
        </figure>
      ))}
    </div>
  );
};

export default Card;
