import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useLocalStorage } from '../api/hooks/useLocalStorage';
import useFormInput from '../api/hooks/useFormInput';

const HookTests = (_props: RouteComponentProps) => {
  const [name, setName] = useLocalStorage<string>('user.name');
  const [other, otherHandler] = useFormInput('Lux');

  return (
    <div>
      <label>
        LocalStorage{' '}
        <input
          id="localstorage"
          value={name || ''}
          onChange={event => setName(event.target.value)}
        />{' '}
        {name || 'None'}
      </label>
      <hr />
      <label>
        useFormInput <input {...otherHandler} /> {other || 'None'}
      </label>
    </div>
  );
};

export default HookTests;
