import React from 'react';
import { RouteComponentProps } from '@reach/router';

const MainMenu = (_props: RouteComponentProps) => (
  <>
    <h1>Main Menu</h1>
    <button>New Game</button>
    <button disabled>Load Game (coming soon)</button>
  </>
);

export default MainMenu;
