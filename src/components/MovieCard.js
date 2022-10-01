import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CAROUSEL
//=========================
class MovieCard extends React.Component {

  addDefaultSrc(e) {
    e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';
  }

  render() {
    return (
      <>
        <Container id="carouselImg">
          <div>
            <img
              className="d-block w-100"
              src={this.props.movieData.poster_path}
              alt={this.props.movieData.title}
              onError={this.addDefaultSrc}
            />
          </div>
        </Container>

        <Carousel.Caption id="carouselText" className='bg-dark mx-auto bg-opacity-75 rounded-bottom'>
          <>
            <div>
              <p><b>Title:</b> {this.props.movieData.title}</p>
              <p><b>Overview:</b> {this.props.movieData.overview}</p>
              {/* <p>Average Votes: {this.props.movieData.vote_average}</p>
              <p>Total Votes: {this.props.movieData.vote_count}</p>
              <p>Popularity: {this.props.movieData.popularity}</p> */}
              <p><b>Released On:</b> {this.props.movieData.release_date}</p>
            </div>
          </>
        </Carousel.Caption>
      </>
    );
  }
}

export default MovieCard;
