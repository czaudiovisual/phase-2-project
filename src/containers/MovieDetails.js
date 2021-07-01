import React from 'react'

class MovieDetails extends React.Component {
    state = {
        movieDetails: {}
    }

    componentDidMount() {
        fetch("http://localhost:3001/movies/" + this.props.match.params.id)
            .then(res => res.json())
            .then(movieDetails => this.setState({ movieDetails }));
    }

    render() {
        return (

            <div>
                <h2>Movie Details</h2>
                <img className="img-details" src={this.state.movieDetails.url}/>
                <p>Movie: {this.state.movieDetails.movie}</p>
                <p>Year: {this.state.movieDetails.year}</p>
                <p>Director: {this.state.movieDetails.director}</p>
            </div>
        )
    }
}

export default MovieDetails;