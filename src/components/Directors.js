import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, index) => {
          return (
            <div key={index}>
              <h3>{director.name}</h3>
              <ul>
                <li>{director.movies}</li>
              </ul>
            </div>
          )
        })}
    </div>
  );
}

export default Directors;
