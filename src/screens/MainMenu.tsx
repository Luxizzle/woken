import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';

const MainMenu = (_props: RouteComponentProps) => (
  <>
    <h1>Main Menu</h1>
    <Link to="/debug/hook-tests">bla</Link>
  </>
);

export default MainMenu;
