const Thumbnail = ({ thumbnail, description }) => {
  return (
    <span>
      <img src={thumbnail} alt="image" loading="lazy" />
      <blockquote>{description}</blockquote>
    </span>
  );
};

export default Thumbnail;
