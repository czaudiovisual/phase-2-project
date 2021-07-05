import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormAddMovie extends React.Component {

    state = {
        url: "",
        movie: "",
        director: "",
        year: "",
        budget: "",
    };

    // modifies state allow me to add new values
    handleOnChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.name, event.target.value);
        this.setState({
            [name]: value,
        });
    };

    // submit all the new values with fetch
    handleOnSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3001/movies", this.addMovie())
            .then(res => res.json())
            .then(movies => this.props.history.push("/"));

    };

    addMovie = () => {
        return {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        }
    };

    render() {
        // form to add more movies to state, using material iu to style box
        const { url, movie, director, year, budget } = this.state
        return (
            <form className="form-box" onSubmit={this.handleOnSubmit}>
                <TextField 
                    required="true"
                    margin="normal"
                    id="outlined-basic"
                    variant="outlined"
                    label="Add Url"
                    name="url"
                    value={url}
                    onChange={this.handleOnChange} />
                <TextField 
                    required="true"
                    margin="normal"
                    id="outlined-basic"
                    variant="outlined"
                    label="Movie Name"
                    name="movie"
                    value={movie}
                    onChange={this.handleOnChange} />
                <TextField 
                    required="true"
                    margin="normal"
                    id="outlined-basic"
                    variant="outlined"
                    label="Director"
                    name="director"
                    value={director}
                    onChange={this.handleOnChange} />
                <TextField 
                    required="true"
                    margin="normal"
                    id="outlined-basic"
                    variant="outlined"
                    label="Year"
                    name="year"
                    value={year}
                    onChange={this.handleOnChange} />
                <TextField 
                    required="true"
                    margin="normal"
                    id="outlined-basic"
                    variant="outlined"
                    label="Budget"
                    name="budget"
                    value={budget}
                    onChange={this.handleOnChange} />
                <div className="back-button">
                    <Button
                    size="large"
                        variant="contained"
                        color="primary"
                        type="submit">Add Movie
                    </Button>
                </div>
                {/* <label htmlFor="budget">Budget:</label>
                <input
                    type="text"
                    name="budget"
                    value={budget}
                    onChange={this.handleOnChange} />
                <button type="submit">Add Movie</button> */}
            </form>
        )
    };
}

export default FormAddMovie;

