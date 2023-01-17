import { useState } from "react";

export function useLocalState(key, defaultValue) {
  const storedValue = localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : defaultValue;
  const [state, setState] = useState(item);

  const updateState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateState];
}
