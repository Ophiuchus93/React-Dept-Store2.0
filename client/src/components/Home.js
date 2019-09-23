import React from "react";
import { Header, Card, Button, } from "semantic-ui-react"
import { Link, } from "react-router-dom";
import axios from "axios"

class Home extends React.Component {
  state = { departments: [], }; 

  componentDidMount () {
    axios.get("/api/departments")
    .then ( res => {
      this.setState({ departments: res.data})
    })
  }

  renderDepartments = () => {
    const { departments } = this.state;
    if (departments.length <= 0)
      return <h2>No Departments</h2>
        return departments.map( department => (
          <Card>
            <Card.Content>
              <Card.Header>{ department.name }</Card.Header>
            </Card.Content>
          </Card>
        ))
  }


  render () {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
          Add a Department
        </Button>
        <br />
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Home;