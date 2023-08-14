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
    <Card style={{width:"370px", height:"625px"}}>
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
        <Card.Header style={{fontSize:"17px",height:"20px"}}>{movie.original_title}</Card.Header>
        <br />
        <Card.Meta>
          <span className="date">
            release date: {movie.release_date}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="user" />
          vote average: {movie.vote_average}
        </span>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
