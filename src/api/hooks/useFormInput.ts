import { useState, ChangeEvent } from 'react';

/**
 *
 * Example:
 *
 * ```tsx
 * const [name, nameFormHandler] = useFormInput('Lux')
 *
 * <p>{name}</p>
 * <input {...nameFormHandler} />
 * ```
 */
export default function useFormInput(
  initialState: string
): [
  string,
  {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
] {
  const [value, setValue] = useState<string>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [
    value,
    {
      value,
      onChange,
    },
  ];
}
