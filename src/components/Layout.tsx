import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #aaa;
  max-width: 600px;
  margin: 0 auto;
`;

const Layout: FunctionComponent = ({ children }) => (
  <StyledDiv>{children}</StyledDiv>
);

export default Layout;
