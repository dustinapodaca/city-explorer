import React from 'react';
import axios from 'axios';
import CityForm from './components/CityForm';
import CityCard from './components/CityCard';
import Weather from './components/Weather';
import './App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      displayCard: false,
      errorMessage: '',
      cityMap: '',
      weatherData: [],
      displayWeather: false,
    };
  }

  handleInput = (e) => {
    this.setState({ searchQuery: e.target.value });
    // console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    //code runs in the try block
    e.preventDefault();
    this.setState({ error: false });
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      // console.log(response.data[0]);
      this.setState({ 
        location: response.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12`,
        displayCard: true,
        searchQuery: '',
      });

    } catch (error) {
      this.setState({ 
        error: true,
        displayCard: false,
      });
      this.setState({ errorMessage: error.message });
    }
  }

  handleWeather = async (e) => {
    try {
      e.preventDefault();
      const API = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const response = await axios.get(API);
      this.setState({ 
        weatherData: response.data,
        displayWeather: true, 
      });
      console.log(this.state.weatherData);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <CityForm
          handleInput={this.handleInput}
          handleSearch={this.handleSearch}
          location={this.state.location}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
          searchQuery={this.state.searchQuery}

        />
        <CityCard 
          location={this.state.location}
          cityMap={this.state.cityMap}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
          displayCard={this.state.displayCard}
        />
        <Weather
          handleWeather={this.handleWeather}
          weatherData={this.state.weatherData}
          displayWeather={this.state.displayWeather}
        />
      </>
    );
  }
}

export default Main;
