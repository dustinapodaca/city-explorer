import React from 'react';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
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
        <Footer />
      </>
    );
  }
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       supplies: [],
//       food: [],
//     };
//   }

//   handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       if (e.target.supplies.checked) {
//         const supplies = await axios.get('http://localhost:3001/supplies');
//         this.setState({ supplies: supplies.data });
//       };
//       if (e.target.food.checked) {
//         const food = await axios.get('http://localhost:3001/food');
//         this.setState({ food: food.data });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <Header />
//         <div id="mainDiv">
//           <Main />
//         </div>
//         <Container>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group controlId="supplies">
//               <Form.Check type="checkbox" label="View Supplies"></Form.Check>
//             </Form.Group>

//             <Form.Group controlId="food">
//               <Form.Check type="checkbox" label="View Food"></Form.Check>
//             </Form.Group>
          
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Container>
//         <Container>
//           <h2>Supplies</h2>
//           {this.state.supplies.length > 0 && this.state.supplies.map((item) => {
//             return (
//               <p key={item.id}> {item.name} </p>
//             )
//           })}
//         </Container>
//         <Container>
//           <h2>Food</h2>
//           {this.state.food.length > 0 && this.state.food.map((item) => {
//             return (
//               <p key={item.id}> {item.name} </p>
//             )
//           })}
//         </Container>
//         <Footer />
//       </>
//     );
//   }
// }

// export default App;