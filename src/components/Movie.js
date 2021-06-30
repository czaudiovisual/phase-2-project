import React from 'react'


class Movie extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.url}/>
                <h2>{this.props.movie}</h2>
            </div>
        )
    }
}

export default Movie;