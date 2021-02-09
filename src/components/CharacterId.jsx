import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../config';
import { useFetch } from '../hooks/useFetch';

export const CharacterId = () => {
  let { id } = useParams();
  const { data: character } = useFetch(`${API}/character/${id}`);
  return (
    <>
      <CharacterIdStyle>
        <article className="Characters-card">
          <img src={character?.image} alt={character?.name} />
          <h2>{character?.name}</h2>
        </article>
        <article className="Characters-card">
          <h3>Episodes: <span>{character?.episode?.length}</span> </h3>
          <h3>Status: <span>{character?.status}</span> </h3>
          <h3>Species: <span>{character?.species}</span> </h3>
          <h3>Genger: <span>{character?.gender}</span> </h3>
          <h3>Origin: <span>{character?.origin.name}</span> </h3>
          <h3>Last location: <span>{character?.location?.name}</span> </h3>
        </article>
      </CharacterIdStyle>
      {
        character?.episode?.map((url, i) => {
          let urlShort = url.slice(32).replace('/', ' nº ');
          let urlTo = url.slice(32);
          return (
            <ul key={i}>
              <Link to={`/${urlTo}`}>
                <li>{i + 1} {urlShort}</li>
              </Link>
            </ul>
          )
        })
      }
    </>
  )
};

const CharacterIdStyle = styled.div`
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
.Characters-card {
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  display: block;
  animation-duration: 2s;
  animation-name: fade;
}
.Characters-card img {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}
.Characters-card h2 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
.Characters-card h3 {
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin: 20px;
}
`;
