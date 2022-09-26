import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    // console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    //code runs in the try block
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      console.log(response.data[0]);
      this.setState({ location: response.data[0] });
      //if there is an error code runs in the catch block
    } catch (error) {
      console.log(error)
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }
  }

  render() {
    return (
      <>
        <input onChange={this.handleInput} placeholder="search for a city"/>
        <button onClick={this.handleSearch}>Explore</button>
        {this.state.location.place_id &&
          <>
            <h2>The City is: {this.state.location.display_name}</h2>
            <h2>The Latitude is: {this.state.location.lat}</h2>
            <h2>The Longitude is: {this.state.location.lon}</h2>
          </>
        }
        {this.state.error &&
          <>
            <h2>Oh no! {this.state.errorMessage}.</h2>
          </>
        }
      </>
    );
  }
}

export default App;
