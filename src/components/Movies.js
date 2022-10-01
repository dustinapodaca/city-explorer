import React from 'react';
import { Carousel, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  render() {
    return (
      <Container id="carousel">
        <Card className="bg-light mx-auto">
          <Card.Title id="weatherTitle" className="rounded-top text-light p-3 mx-auto w-100">Movies Related to the City of {this.props.location.display_name.split(' ').shift().replace(/,/g, '')}</Card.Title>
          <Carousel className='h-50 bg-dark rounded-bottom'>
              {this.props.displayCard &&
              this.props.movieData.map((e, i) => {
                return (
                  <Carousel.Item>
                    <MovieCard
                      key={i}
                      movieData={e}
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
