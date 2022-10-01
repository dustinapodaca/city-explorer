import React from 'react';
import { Container, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Container className='h-100'>
          <Card className="mb-3 h-100">
            <Card.Title id="weatherTitle" className="pt-3 rounded-top text-light p-3 w-100">Date: ({this.props.weatherData.date})</Card.Title>
            <Card.Text className='px-3 pt-3'>
              The weather forecast in {this.props.weatherData.city_name} calls for {this.props.weatherData.description.toLowerCase()}.
              <br />
              <br />
              <b>High:</b> {this.props.weatherData.high_temp} &#176;F
              <br />
              <b>Low:</b> {this.props.weatherData.low_temp} &#176;F
            </Card.Text>
          </Card>
        </Container>
      </>
    )
  }
}

export default WeatherDay;
