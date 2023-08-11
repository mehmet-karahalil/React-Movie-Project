import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, pageDown, pageUp } from "../redux/features/movieSlice";
import MovieCard from "./MovieCard";
import { Grid, Button, Icon } from "semantic-ui-react";
import { CircleLoader } from "react-spinners";

export default function MoviesList() {
  const dispatch = useDispatch();
  const { movie = [], loading } = useSelector((state) => state.movie);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getMovie(pageNumber));
  }, [pageNumber, dispatch]);

  const emptyMovie = <h1>404 not found </h1>;

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    dispatch(pageUp(pageNumber + 1));
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
      dispatch(pageDown(pageNumber - 1));
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
        <Button
          animated
          onClick={nextPage}
        >
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
        <Button
          animated
          onClick={prevPage}>
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
