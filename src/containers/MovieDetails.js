import React from 'react'
import Button from '@material-ui/core/Button';

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
            <div >
                <div className="back-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.history.goBack()}>
                        Back
                    </Button>
                </div>
                <div className="card-details">
                    <h2>Movie Details</h2>
                    <img className="img-details" src={this.state.movieDetails.url} />
                    <p><span>Movie:  </span>{this.state.movieDetails.movie}</p>
                    <p><span>Release date: </span>{this.state.movieDetails.year}</p>
                    <p><span>Director: </span>{this.state.movieDetails.director}</p>
                    <p><span>Budget: </span>{this.state.movieDetails.budget}</p>
                </div>
            </div>
        )
    }
}

export default MovieDetails;