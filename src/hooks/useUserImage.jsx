import { useState, useRef, useEffect } from 'react';

const useUserImage = () => {
  const [isOpenSocial, setOpenSocial] = useState(false);
  const userImageRef = useRef(null);
  const userTextRef = useRef(null);
  const socialRef = useRef(null);

  const imageHandleClick = () => {
    userTextRef.current.classList.toggle('open-user-navbar');
    socialRef.current.classList.toggle('open-user-navbar');
    setOpenSocial(!isOpenSocial);
  };

  useEffect(() => {
    const imageHandleClickOutside = (e) => {
      if (!userImageRef.current.contains(e.target) && !userTextRef.current.contains(e.target) && !socialRef.current.contains(e.target)) {
        userTextRef.current.classList.remove('open-user-navbar');
        socialRef.current.classList.remove('open-user-navbar');
        setOpenSocial(false);
      };
    };

    document.addEventListener('click', imageHandleClickOutside);

    return () => {
      document.removeEventListener('click', imageHandleClickOutside);
    };
  }, []);

  return { isOpenSocial, imageHandleClick, userImageRef, userTextRef, socialRef };
};

export default useUserImage;
