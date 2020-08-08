import {useState} from 'react';

const useActive = () => {
  const [active, setActive] = useState(true);
  
  const toggleActive = () => {
    setActive(!active);
  };
  
  return {
    active,
    setActive,
    toggleActive
  }
}

export default useActive;
