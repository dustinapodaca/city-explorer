import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

class CityCard extends React.Component {

  render() {
    return (
      <>
        {this.props.error &&
        <Container>
          <Alert variant="danger" className="my-3">
            <Alert.Heading className='text-center'>
              <>
                <h5>Oh no! {this.props.errorMessage}. Please try another city.</h5>
              </>
            </Alert.Heading>
          </Alert>
        </Container>
        }
        {this.props.displayCard &&
        <Container>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{this.props.location.display_name}</Card.Title>
              <Card.Text>
                Latitude: {this.props.location.lat} <br />
                Longitude: {this.props.location.lon}
              </Card.Text>
                <Card.Img variant="top" className="p-4 bg-light border border-dark " src={this.props.cityMap} />
            </Card.Body>
          </Card>
        </Container>
        }
      </>
    )
  }
}

export default CityCard;