import React from 'react'
import { Link } from "react-router-dom"


class MoviePoster extends React.Component {
    // Passing props to render movie poster and info
    render() {
        return (
            <div>
                <Link to={"/movies/"+this.props.id}>
                    <img className="img-poster" src={this.props.url} />
                </Link>
                <h2 className="movie-titles">{this.props.movie}</h2>
            </div>
        )
    }
}

export default MoviePoster;