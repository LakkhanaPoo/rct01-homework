import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMDB from "./TMDB";

class App extends Component {
  render() {
    const { films } = this.props;

    return (
      <div className="film-library">
        <FilmListing films={films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
