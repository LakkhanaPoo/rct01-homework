import React, { Component } from "react";
import "./App.css";
import FilmPoster from "./FilmPoster";

class FilmRow extends Component {
  getFullYear = year => {
    let fullYear = new Date(year);
    return fullYear.getFullYear();
  };
  render() {
    const { title, posterUrl, year } = this.props;

    return (
      <div className="film-row">
        <FilmPoster posterUrl={posterUrl} title={title} />
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{this.getFullYear(year)}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
