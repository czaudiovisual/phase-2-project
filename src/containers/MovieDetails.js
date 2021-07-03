import React from 'react'
import Button from 'react-bootstrap/Button';



class MovieDetails extends React.Component {
    state = {
        movieDetails: {}
    }

    // Fetch Request to render dynamic params
    componentDidMount() {
        fetch("http://localhost:3001/movies/" + this.props.match.params.id)
            .then(res => res.json())
            .then(movieDetails => this.setState({ movieDetails }));
    }
    // Return values from state
    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.props.history.goBack()}>Back</Button>{' '}
                <h2>Movie Details</h2>
                <img className="img-details" src={this.state.movieDetails.url} />
                <p>Movie: {this.state.movieDetails.movie}</p>
                <p>Release date: {this.state.movieDetails.year}</p>
                <p>Director: {this.state.movieDetails.director}</p>
                <p>Budget: {this.state.movieDetails.budget}</p>
            </div>
        )
    }
}

export default MovieDetails;