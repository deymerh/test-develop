import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { API } from '../config';
import { useFetch } from '../hooks/useFetch';
import { CardItem } from './CardItem';

export const Home = () => {

  const [page, setPage] = useState(1);
  const { loading, data: characters } = useFetch(`${API}/character/?page=${page}`);

  return loading ? <p style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '96vh',
    position: 'absolute',
    width: '97vw'
  }}>Loading...</p> : (
      <InfiniteScroll
        dataLength={characters.results.length}
        next={() => setPage(page + 1)}
        inverse={false}
        hasMore={true}
        loader={<h4 style={{ display: 'flex', justifyContent: 'center' }}>Cargando...</h4>}
        scrollThreshold="40px"
      >
        <MainComponent>
          {
            characters?.results.map(character => {
              return (
                <CardItem
                  key={character.id}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                />
              )
            })
          }
        </MainComponent>
      </InfiniteScroll>
    )
};

const MainComponent = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;
