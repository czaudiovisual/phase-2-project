import React, { Component } from "react";
import MoviePoster from './MoviePoster'
import FormAddMovie from "./FormAddMovie";


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
            <div className="card-wrapper">
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
