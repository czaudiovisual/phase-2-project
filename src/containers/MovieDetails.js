import React from 'react'
import { Link } from "react-router-dom"



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

    render() {
        return (
            <div>
                <button className="back-button" onClick={() => this.props.history.goBack()}>Back</button>
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