import React from "react";
import MoviesList from "../MoviesList";
import { pagecss } from "../../helpers/styleHelpers";


export default function MoviesPage() {
  return (
    <div style={pagecss }>
      <h1>Popular</h1>
      <MoviesList />
    </div>
  );
}
