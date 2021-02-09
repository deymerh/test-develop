import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderComponent>
      <div className="Header-log">
        <h1>
          <Link to="/">
            Rick and Morthy
          </Link>
        </h1>
      </div>
      <div className="Header-nav">
        <Link to="/">
          About
        </Link>
      </div>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
  a {
    text-decoration: none;
    color: #15302c;
  }
`;