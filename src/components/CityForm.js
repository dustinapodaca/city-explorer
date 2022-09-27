import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.handleSearch} className="my-3">
            <Form.Group className="mb-3">
              <Form.Control onChange={this.props.handleInput} type="text" placeholder="Enter a city name to see its location on a map:" />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button onClick={this.props.handleSearch} variant="primary" type="submit">Explore!</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default CityForm;