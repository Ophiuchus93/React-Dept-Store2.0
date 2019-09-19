import React from "react";
import { Header, Card,  } from "semantic-ui-react"

class Home extends React.Component {
  state = { departments: [], }; 

  componentDidMount () {
    
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
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Home;