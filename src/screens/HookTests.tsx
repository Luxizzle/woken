import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useLocalStorage } from '../api/hooks/useLocalStorage';
import useFormInput from '../api/hooks/useFormInput';

const HookTests = (_props: RouteComponentProps) => {
  const [name, setName] = useLocalStorage<string>('user.name');
  const [other, otherHandler] = useFormInput('Lux');

  return (
    <div>
      <p>{name || 'No name set'}</p>
      <input
        value={name || ''}
        onChange={event => setName(event.target.value)}
      />
      <p>{other || 'No other set'}</p>
      <input {...otherHandler} />
    </div>
  );
};

export default HookTests;
