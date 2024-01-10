// lifted and reworked from
// github.com/vmarchesin/react-konami-code

import { useEffect, useState, useCallback } from "react";

export const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function useKonami(action, { code = KONAMI_CODE } = {}) {
  const [input, setInput] = useState([]);

  const onKeyUp = useCallback(
    ({ keyCode }) => {
      if (code[input.length] !== keyCode) {
        setInput([]);
        return;
      }

      setInput([...input, keyCode]);
    },
    [input, setInput, code]
  );

  useEffect(() => {
    document.addEventListener("keyup", onKeyUp);
    return () => document.removeEventListener("keyup", onKeyUp);
  }, [onKeyUp]);

  useEffect(() => {
    if (input.length === code.length) action();
  }, [input, code, action]);

  return { input };
}

export default useKonami;
