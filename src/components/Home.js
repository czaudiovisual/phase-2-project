import React, { Component } from "react";
import Movie from './Movie'


class Home extends Component {

    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("http://localhost:3001/movies")
            .then(res => res.json())
            .then(movies => this.setState({movies}));
    }

    render() {
        return (
            <div>
                <h2>Harry Potter Movies</h2>
                {this.state.movies.map(movie => 
                   <Movie movie={movie.movie}
                   url={movie.url} />
                )}
            </div>
        );
    }
}



export default Home;
