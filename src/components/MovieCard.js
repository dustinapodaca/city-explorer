import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieCard extends React.Component {
  render() {
    return (
      <>
        <Container>
          <>
            <div>
              <p>Title: {this.props.movieData.title}</p>
              <p>Overview: {this.props.movieData.overview}</p>
              <p>Average Votes: {this.props.movieData.vote_average}</p>
              <p>Total Votes: {this.props.movieData.vote_count}</p>
              <p>Popularity: {this.props.movieData.popularity}</p>
              <p>Released On: {this.props.movieData.release_date}</p>
              <Card.Img variant="top" className="p-4 bg-light border border-dark " src={this.props.movieData.poster_path} alt={this.props.movieData.title} />
            </div>
          </>
        </Container>
      </>
    )
  }
}

export default MovieCard;



//CAROUSEL
//=========================
// class MovieCard extends React.Component {
//   render() {
//     return (
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={this.props.movieData.poster_path}
//           alt={this.props.movieData.title}
//         />
//         <Carousel.Caption>
//           <>
//             <div>
//               <p>Title: {this.props.movieData.title}</p>
//               <p>Overview: {this.props.movieData.overview}</p>
//               <p>Average Votes: {this.props.movieData.vote_average}</p>
//               <p>Total Votes: {this.props.movieData.vote_count}</p>
//               <p>Popularity: {this.props.movieData.popularity}</p>
//               <p>Released On: {this.props.movieData.release_date}</p>
//             </div>
//           </>
//         </Carousel.Caption>
//       </Carousel.Item>
//     );
//   }
// }

// export default MovieCard;