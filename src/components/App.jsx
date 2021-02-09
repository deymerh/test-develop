import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import styled from 'styled-components';
import { Home } from './Home';
import { CharacterId } from './CharacterId';
import { Episode } from './Episode';

const App = () => {
  return (
    <BrowserRouter>
      <AppComponent>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:id" component={CharacterId} />
          <Route exact path="/episode/:id" component={Episode} />
        </Switch>
      </AppComponent>
    </BrowserRouter>
  )
}

export default App;

const AppComponent = styled.main`
    padding: 10px;
    grid-template-columns: minmax(auto, 976px);
    display: grid;
    justify-content: center;
`;