import { useRef, useEffect } from 'react';

export const useFirstRender = () => {
  const useFirstRender = useRef(true);
  useEffect(() => {
    useFirstRender.current = false;
  }, []);
  return useFirstRender.current;
};

export default useFirstRender;