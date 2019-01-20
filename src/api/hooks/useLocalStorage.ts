import { useState, useEffect } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

export const adapter = new LocalStorage('db');
export const db = low(adapter);
let changeCallbacks: { key: string | number | symbol; cb: Function }[] = [];

window.onstorage = function(event) {
  changeCallbacks
    // TODO: Check for a way to make these more performance friendly.
    // .filter(({ key }) => event.key === key)
    .forEach(({ cb }) => cb(event));
};

/**
 * @example
 * const [value, setValue] = useLocalStorage<string>('bla');
 */
export function useLocalStorage<Type>(
  key: string | number | symbol,
  defaultValue?: Type | null
): [Type | null, (newValue: Type | null) => void] {
  let initialValue = db.get(key).value();
  if (!initialValue) initialValue = defaultValue;

  const [value, setStateValue] = useState<Type | null>(initialValue);

  const setValue = (value: Type | null) => {
    setStateValue(value);
    db.set(key, value).write();
  };

  const handleChange = async () => {
    const newValue = db.get(key).value();
    // Only set state if its actually new
    if (newValue !== value) {
      setStateValue(newValue);
    }
  };

  useEffect(() => {
    changeCallbacks.push({ key, cb: handleChange });

    return () => {
      changeCallbacks = changeCallbacks.filter(({ cb }) => cb === handleChange);
    };
  });

  return [value, setValue];
}
