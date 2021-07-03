import React from 'react'
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap';


class MoviePoster extends React.Component {
    // Passing props to render movie poster and info
    render() {
        return (
                <div>
                    <Card>
                        <Card.Body>
                            <Link to={"/movies/" + this.props.id}>
                                <img className="img-poster" src={this.props.url} />
                                <p className="movie-titles">{this.props.movie}</p>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
        )
    }
}

export default MoviePoster;
