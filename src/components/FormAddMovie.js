import React from "react";


class FormAddMovie extends React.Component {

    state = {
        url: "",
        movie: "",
        director: "",
        year: "",
        budget: "",
    };

    handleOnChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target.name, event.target.value);
        this.setState({
            [name] : value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault()
        
    };

    render() {
        const { url, movie, director, year, budget } = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="url">Image Url:</label>
                <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={this.handleOnChange} />
                <label htmlFor="movie">Movie Name:</label>
                <input
                    type="text"
                    name="movie"
                    value={movie}
                    onChange={this.handleOnChange} />
                <label htmlFor="director">Director:</label>
                <input
                    type="text"
                    name="director"
                    value={director}
                    onChange={this.handleOnChange} />
                <label htmlFor="year">Year:</label>
                <input
                    type="text"
                    name="year"
                    value={year}
                    onChange={this.handleOnChange} />
                <label htmlFor="budget">Budget:</label>
                <input
                    type="text"
                    name="budget"
                    value={budget}
                    onChange={this.handleOnChange} />
            </form>
        )
    }
}

export default FormAddMovie;

