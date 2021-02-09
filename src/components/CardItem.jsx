import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardItem = ({ id, image, name }) => {
  return (
    <Character>
      <Link to={`/character/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </Link>
    </Character>
  )
};

const Character = styled.article`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  display: block;
  animation-duration: 2s;
  animation-name: fade;
  :hover{
    h2{
      color: red;
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #026c86;
  }
`;
