import React from 'react'
import { Link } from "react-router-dom"



class MoviePoster extends React.Component {
    // Passing props to render movie poster and info
    render() {
        return (

            <div className="card-box">
                <Link to={"/movies/" + this.props.id}>
                    <img className="img-poster" src={this.props.url} />
                    <p className="movie-titles">{this.props.movie}</p>
                </Link>
            </div>

        )
    }
}

export default MoviePoster;
