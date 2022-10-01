import React from 'react';
import { Carousel, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';

//CAROUSEL
//=========================
class Movies extends React.Component {
  render() {
    return (
      <Container id="carousel">
        <Card className="bg-light mx-auto">
          <Card.Title id="weatherTitle" className="rounded-top text-light p-3 mx-auto w-100">Movies Related to the City of {this.props.location.display_name.split(' ').shift().replace(/,/g, '')}</Card.Title>
          <Carousel className='h-50 bg-dark rounded-bottom'>
              {this.props.displayMovies &&
              this.props.movieData.map((e, i) => {
                return (
                  <Carousel.Item>
                    <MovieCard
                      key={i}
                      movieData={e}
                      displayMovies={this.props.displayMovies}
                    />
                  </Carousel.Item>
                )
              })}
          </Carousel>
        </Card>
      </Container>
    );
  }
}

export default Movies;


// class Movies extends React.Component {
//   render() {
//     return (
//       <>
//         {this.props.displayMovies &&
//         <Container>
//           <Card className="mb-4 bg-light mx-auto pb-1">
//               <Card.Title id="weatherTitle" className="mb-3 rounded-top text-light p-3 mx-auto w-100">Movies Related to the City of {this.props.location.display_name.split(' ').shift().replace(/,/g, '')}</Card.Title>
//             <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 px-3">
//               {this.props.movieData.map((e, i) => {
//                 return (
//                   <Col className='mb-3'>
//                     <MovieCard
//                       key={i}
//                       movieData={e}
//                       displayMovies={this.props.displayMovies}
//                     />
//                   </Col>
//                 )
//               })}
//             </Row>
//           </Card>
//         </Container>
//         }
//       </>
//     );
//   }
// }

// export default Movies;







