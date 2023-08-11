import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


const movieCard = ({ movie }) => (
  
  <Card>
    <Image src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.original_title}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in {movie.createdAt}</span>
      </Card.Meta>
      <Card.Description>{movie.overview}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        vote average: {movie.vote_average}
      </a>
    </Card.Content>
  </Card>
);

export default movieCard;
