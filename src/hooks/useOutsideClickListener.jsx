import { useEffect } from 'react';

const useOutsideClickListener = (ref, action) => {
  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useOutsideClickListener;
