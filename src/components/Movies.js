import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.displayMovies &&
        <Container>
          <Card className="mb-4 bg-light mx-auto pb-1">
            <Card.Title id="weatherTitle" className="mb-3 rounded-top text-light p-3 mx-auto w-100">Movies Related to the City of{this.props.location.display_name}</Card.Title>
            <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 px-3">
              {this.props.movieData.map((e, i) => {
                return (
                  <Col className='mb-3'>
                    <MovieCard
                      key={i}
                      movieData={e}
                      displayMovies={this.props.displayMovies}
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

export default Movies;



//CAROUSEL
//=========================
// class Movies extends React.Component {
//   render() {
//     return (
//       <Carousel>
//         {this.props.displayMovies &&
//         this.props.movieData.map((e, i) => {
//           return (
//             <MovieCard
//               key={i}
//               movieData={e}
//               displayMovies={this.props.displayMovies}
//             />
//           )
//         })}
//       </Carousel>
//     );
//   }
// }

// export default Movies;

