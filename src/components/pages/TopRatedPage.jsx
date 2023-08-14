import React from "react";
import TopRatedMovieList from "../TopRatedMovieList";
import { pagecss } from "../../helpers/styleHelpers";



export default function TopRated() {
  return (
    <div style={pagecss }>
      <h1>Top Rated</h1>
      <TopRatedMovieList/>
    </div>
  );
}
