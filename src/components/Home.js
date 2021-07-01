import React, { Component } from "react";
import MoviePoster from './MoviePoster'


class Home extends Component {

    state = {
        movies: [],
    };
    // Fetch Request 
    componentDidMount() {
        fetch("http://localhost:3001/movies")
            .then(res => res.json())
            .then(movies => this.setState({ movies }));
    }
    // Rendering movie props
    render() {
        return (
            <div>
                {this.state.movies.map(moviePosterInfo =>
                    <MoviePoster
                        movie={moviePosterInfo.movie}
                        url={moviePosterInfo.url}
                        id={moviePosterInfo.id} />

                )}
            </div>
        );
    }
}



export default Home;
