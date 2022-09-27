import React from 'react';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <div id="mainDiv">
          <Main />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
