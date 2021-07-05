import React from 'react'

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <img src="https://img.pngio.com/movie-png-transparent-image-movie-png-512_512.png" />
            <div className="nav-links">
                <ul><a href="/">Home</a></ul>
                <ul><a href="/form">Add Movie</a></ul>
            </div>
        </header>
    )
}

export default Header;