import useButtonReadMore from '../../hooks/useButtonReadMore';

const TestiBody = ({ body, buttonRead = 'read more' }) => {
  const { isReadMore, buttonHandleClick } = useButtonReadMore();
  const truncate = body.length > 238;

  let content;

  if (truncate) {
    if (isReadMore) {
      content = (
        <>
          {body} <button onClick={buttonHandleClick}>{(buttonRead = 'read less')}</button>
        </>
      );
    } else {
      content = (
        <>
          {body.substring(0, 238)}... <button onClick={buttonHandleClick}>{buttonRead}</button>
        </>
      );
    }
  } else {
    content = <>{body}</>;
  }

  return <p className="testimony-body">{content}</p>;
};

export default TestiBody;
