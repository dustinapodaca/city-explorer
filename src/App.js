import React from 'react';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import Mainphotos from './Mainphotos';
import './App.css';
// import { Form, Container, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

class App extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <div id="mainDiv">
          <Main />
        </div>
        <Mainphotos />
        <Footer />
      </>
    );
  }
}

export default App;

