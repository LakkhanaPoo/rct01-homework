import React, { Component } from "react";
import "./App.css";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  render() {
    const { films } = this.props;
    const allFilms = this.props.films.map((film, index) => (
      <FilmRow
        key={index}
        title={film.title}
        posterUrl={film.poster_path}
        year={film.release_date}
      />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
        <p>{films.title}</p>
      </div>
    );
  }
}

export default FilmListing;
