import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <React.Fragment>
      <h1>Movies Page</h1>      
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <h3>{movie.title}</h3>
              <p>{movie.time}</p>
              <ul>
                <li>{movie.genres}</li>
              </ul>
            </div>
          )
        })}
    </React.Fragment>
  );
}

export default Movies;
