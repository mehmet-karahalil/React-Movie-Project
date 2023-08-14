import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topgetMovie, toppageDown, toppageUp } from "../redux/features/topratedSlice";
import MovieCard from "./MovieCard";
import { Grid, Button, Icon } from "semantic-ui-react";
import { CircleLoader } from "react-spinners";

export default function TopRatedMovieList() {
  const dispatch = useDispatch();
  const { movie = [], loading } = useSelector((state) => state.homemovie);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(topgetMovie(pageNumber));
  }, [pageNumber, dispatch]);

  const emptyMovie = <h1>Loading </h1>;

  const nextPage = () => {
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
    dispatch(toppageUp(newPageNumber));
    window.scrollTo(0, 0);
  };
  
  const prevPage = () => {
    if (pageNumber > 1) {
      const newPageNumber = pageNumber - 1;
      setPageNumber(newPageNumber);
      dispatch(toppageDown(newPageNumber));
      window.scrollTo(0, 0);
    }
  };

  const movielist = (
    <div>
      <Grid>
        <Grid.Row columns={5}>
          {movie.map((mov) => (
            <Grid.Column key={mov.id} style={{ marginBottom: "15px" }}>
              <MovieCard movie={mov} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <div style={{ float: "right" }}>
        <Button animated onClick={nextPage}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
      <span style={{ float: "right", fontSize: "25px", lineHeight: "1.5em" }}>
        Page: {pageNumber}
      </span>
      <div style={{ float: "right" }}>
        <Button animated onClick={prevPage}>
          {" "}
          <Button.Content visible>Previous</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <CircleLoader size={400} color="red" loading={loading} />
      {movie.length === 0 ? emptyMovie : movielist}
    </div>
  );
}
