import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../config';
import { useFetch } from '../hooks/useFetch';

export const Episode = () => {
  let { id } = useParams();
  const { data: episode } = useFetch(`${API}/episode/${id}`);
  return (
    <EpisodeCard>
      <h3>Name: <span>{episode?.name}</span> </h3>
      <h3>Air date: <span>{episode?.air_date}</span> </h3>
      <h3>Episode: <span>{episode?.episode}</span> </h3>
      <h3>Created: <span>{episode?.created.slice(0, 10)}</span> </h3>
    </EpisodeCard>
  )
}

const EpisodeCard = styled.article`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0px 20px;
  display: block;
  animation-duration: 2s;
  animation-name: fade;
`;

