import { useEffect, useRef } from 'react';

// TODO: elememnt reference hook. pourqoui ?

const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};

export default useScriptRef;
