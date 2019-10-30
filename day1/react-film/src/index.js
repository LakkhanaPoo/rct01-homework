import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import TMDB from "./TMDB";

ReactDOM.render(
  <App apiKey={TMDB.api_key} films={TMDB.films} />,
  document.getElementById("root")
);
registerServiceWorker();
