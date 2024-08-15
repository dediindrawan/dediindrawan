const Hyperlink = ({ urlVideo, children }) => {
  return (
    <a href={urlVideo} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Hyperlink;
