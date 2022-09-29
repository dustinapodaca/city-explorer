import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather &&
        <Container>
          <h3>Weather</h3>
          <div>
            {this.props.weatherData.map((e, i) => {
              return (
                <>
                  <div key={`weather-${i}`}>
                    <p>Date: {e.date}</p>
                    <p>Forecast: {e.description}</p>
                  </div>
                </>
              )
            })}
          </div>
        </Container>
        }
      </>
    )
  }
}

export default Weather;

// Jumpstart on Lab 08 possible solution
// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       weatherData: {},
//       displayWeather: false,
//       error: false,
//       errorMessage: '',
//     }
//   }

//   getWeather = async (event) => {
//     event.preventDefault();
//     try {
//       const weatherURL = `https://us1.locationiq.com/v1/current.json?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.props.location.lat},${this.props.location.lon}&format=json`;
//       const weatherResponse = await axios.get(weatherURL);
//       this.setState({
//         weatherData: weatherResponse.data,
//         displayWeather: true,
//       });
//     } catch (error) {
//       this.setState({
//         error: true,
//         displayWeather: false,
//       });
//       this.setState({ errorMessage: error.message });
//     }
//   }

// {
  // this.props.weatherData.map((e, i) => {
  //   key = { i }
  //   date = { e.date }
  //   descripion = { e.description }
  //   return (
  //             <p>Date: {date}</p>
  //             <p>Forecast: {description}</p>