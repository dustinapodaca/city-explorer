import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.displayMovies &&
          <Container>
            <h3>Movies</h3>
            <div>
              {this.props.movieData.map((e, i) => {
                return (
                  <>
                    <div key={`movies-${i}`}>
                      <p>Title: {e.title}</p>
                      <p>Overview: {e.overview}</p>
                      <p>Average Votes: {e.vote_average}</p>
                      <p>Total Votes: {e.vote_count}</p>
                      <p>Popularity: {e.popularity}</p>
                      <p>Released On: {e.release_date}</p>
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

export default Movies;