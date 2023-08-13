import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const handleMouseEnter = () => {
    setDescriptionVisible(true);
  };

  const handleMouseLeave = () => {
    setDescriptionVisible(false);
  };
  return (
    <Card>
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          wrapped
          ui={true}
        />
        {isDescriptionVisible && (
          <div className="overlay">
            <div className="description">
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
      <Card.Content>
        <Card.Header>{movie.original_title}</Card.Header>
        <Card.Meta>
          <span className="date">
            release date: {movie.release_date} {movie.createdAt}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          vote average: {movie.vote_average}
        </a>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
