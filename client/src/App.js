import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DepartmentsForm from "./components/DepartmentsForm";
import DepartmentView from "./components/DepartmentView";
import { Container, } from "semantic-ui-react";


const App = () => (
  <>
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
      </Switch>
    </Container>
  </>
);


export default App;
