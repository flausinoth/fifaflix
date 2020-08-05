import React from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex:1;
padding-top:50px;
padding-left: 5px;
padding-right: 5px;
${({ paddingAll }) => css`
padding: ${paddingAll}
`}
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
