import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Card(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling to the container div
    setIsFavorite(!isFavorite);
    props.onFavoriteClick();
  };

  const truncateDescription = (description) => {
    if (description.length <= 100) return description;
    return isExpanded ? description : description.slice(0, 100) + "...";
  };

  return (
    <div className="cards">
      <h2>{props.titles}</h2>
      <img
        src={props.images}
        className="card--images"
        alt="Podcast"
        width="30%"
      />
      <p>Seasons: {props.season}</p>
      <p>Genres: {props.genre}</p>
      <p>Updated: {props.updates}</p>
      {/* Favorite star icon */}
      {isFavorite ? (
        <StarIcon className="star" onClick={handleFavoriteClick} />
      ) : (
        <StarBorderIcon className="star" onClick={handleFavoriteClick} />
      )}
      {/* Show more/ show less */}
      <p>{truncateDescription(props.descriptions)}</p>
      {props.descriptions.length > 100 && (
        <div>
          {isExpanded ? (
            <button onClick={handleExpandClick}>Show Less</button>
          ) : (
            <button onClick={handleExpandClick}>Show More</button>
          )}
        </div>
      )}
    </div>
  );
}
