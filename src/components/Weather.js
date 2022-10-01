import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';
class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather &&
        <Container>
          <Card className="mb-4 bg-light mx-auto pb-1">
            <Card.Title id="weatherTitle" className="mb-3 rounded-top text-light p-3 mx-auto w-100">Daily Weather Forecast for {this.props.location.display_name.split(' ').shift().replace(/,/g, '')}</Card.Title>
              <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 px-3">
              {this.props.weatherData.map((e, i) => {
                return (
                  <Col className='mb-3'>
                    <WeatherDay
                      key={i}
                      weatherData={e}
                      displayWeather={this.props.displayWeather}
                    />
                  </Col>
                )
              })}
            </Row>
          </Card>
        </Container>
        }
      </>
    );
  }
}

export default Weather;
