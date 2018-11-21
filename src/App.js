import React, { Component } from "react";
import Movies from "./components/Movies";
import Form from "./components/Form";

const API_KEY = "cd337b041970202579867c19b928d61b";
class App extends Component {
  state = { movies: [], search: [], checked: false };

  getMovie = async e => {
    e.preventDefault();
    const search = e.target.value; // gets the value of input-field and query with it.
    if (search.length < 1) {
      // map can't return empty,so need a state when input is deleted.
      return null;
    }

    const api_call = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
    );
    const data = await api_call.json();
    this.setState({
      movies: data.results
    });
    console.log(this.state.movies);
  };
  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <div className="container">
        <Form click={this.getMovie} check={this.handleCheck} />
        <Movies movie={this.state.movies} check={this.state.checked} />
      </div>
    );
  }
}

export default App;
