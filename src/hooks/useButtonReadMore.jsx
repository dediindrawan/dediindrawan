import { useState } from 'react';

const useButtonReadMore = () => {
  const [isReadMore, setReadMore] = useState(false);

  const buttonHandleClick = () => {
    setReadMore(!isReadMore);
  };

  return { isReadMore, buttonHandleClick };
};

export default useButtonReadMore;
