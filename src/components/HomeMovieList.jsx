import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  homegetMovie,
  pageDown,
  pageUp,
  homeSetPageNumber,
} from "../redux/features/homeMovieSlice";
import MovieCard from "./MovieCard";
import { Grid, Button, Icon } from "semantic-ui-react";

export default function HomeMovieList() {
  const dispatch = useDispatch();
  const { movie = [], Cpage } = useSelector((state) => state.homemovie);

  useEffect(() => {
    dispatch(homegetMovie(Cpage));
  }, [Cpage]);

  useEffect(() => {
    dispatch(homeSetPageNumber(1));
  }, [dispatch]);

  const emptyMovie = <h1>Loading </h1>;

  const nextPage = () => {
    const newPageNumber = Cpage + 1;
    dispatch(pageUp(newPageNumber));
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    if (Cpage > 1) {
      const newPageNumber = Cpage - 1;
      dispatch(pageDown(newPageNumber));
      window.scrollTo(0, 0);
    }
  };
  const buttoncss = {
    display: "flex",
    alingİtems: "center",
    justifyContent: "center",
    margin: "15px 0px",
  };

  const movielist = (
    <div>
      <div style={buttoncss}>
        <div>
          <Button animated onClick={prevPage}>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </div>
        <span style={{ fontSize: "25px", lineHeight: "1.5em" }}>
          Page: {Cpage}
        </span>
        <div>
          <Button animated onClick={nextPage}>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </div>

      <Grid>
        <Grid.Row columns={5}>
          {movie.map((mov) => (
            <Grid.Column key={mov.id} style={{ marginBottom: "15px" }}>
              <MovieCard movie={mov} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <div style={buttoncss}>
        <div>
          <Button animated onClick={prevPage}>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </div>
        <span style={{ fontSize: "25px", lineHeight: "1.5em" }}>
          Page: {Cpage}
        </span>
        <div>
          <Button animated onClick={nextPage}>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </div>
    </div>
  );

  return <div>{movie.length === 0 ? emptyMovie : movielist}</div>;
}
