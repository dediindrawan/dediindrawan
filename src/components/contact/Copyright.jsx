import { useRef, useEffect } from 'react';

const Copyright = () => {
  const copyrightRef = useRef(null);
  const getYear = new Date().getFullYear();

  useEffect(() => {
    copyrightRef.current && (copyrightRef.current.innerText = getYear);
  }, []);

  return (
    <p className="copyright">
      &copy; <span ref={copyrightRef}></span> |{' '}
      <a href="/" target="_blank" rel="noopener noreferrer">
        Dedi Indrawan
      </a>
    </p>
  );
};

export default Copyright;
