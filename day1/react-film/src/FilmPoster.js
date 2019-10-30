import React, { Component } from "react";
import "./App.css";

class FilmPoster extends Component {
  render() {
    const { title, posterUrl } = this.props;

    return (
      <img src={`https://image.tmdb.org/t/p/w780/${posterUrl}`} alt={title} />
    );
  }
}

export default FilmPoster;
