import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import { Container, } from "semantic-ui-react"


const App = () => (
  <>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  </>
);


export default App;
