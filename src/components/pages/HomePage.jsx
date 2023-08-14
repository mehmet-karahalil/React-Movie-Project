import React from "react";
import HomeMovieList from "../HomeMovieList";
import { pagecss } from "../../helpers/styleHelpers";



export default function HomePage() {
  return (
    <div style={pagecss }>
      <h1>Home Page</h1>
      <HomeMovieList/>
    </div>
  );
}
