import React, { useState } from "react";

const Genre = {
  1: "Personal Growth",
  2: "True Crime and Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};
const FavoritePodcast = ({ favoritePodcasts }) => {
const [sortOption, setSortOption] = useState("az");
const handleSort = (option) => {
setSortOption(option);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  let sortedFavorites = [...favoritePodcasts];
  switch (sortOption) {
    case "az":
      sortedFavorites.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "za":
      sortedFavorites.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "asc":
      sortedFavorites.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
      break;
    case "desc":
      sortedFavorites.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      break;
    default:
      break;
  }
  const sortOptions = [
    { value: "az", label: "Sort A-Z" },
    { value: "za", label: "Sort Z-A" },
    { value: "asc", label: "Sort by Date Ascending" },
    { value: "desc", label: "Sort by Date Descending" },
  ];
  return (
       <div>
      <h2>Favorite Podcasts</h2>
      <div className="sort-buttons">
        <label htmlFor="sort-select">Sort By:</label>
        <select id="sort-select" value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {sortedFavorites.length > 0 ? (
        <ul>
          {sortedFavorites.map((podcast) => (
            <li key={podcast.id}>
              <strong>{podcast.title}</strong>
              <img src={podcast.image} className="card--images" alt="Podcast" />
            <p>Seasons: {podcast.seasons}</p>
            <p>Genres: {podcast.genres.map((genre) => Genre[genre]).join(",")}</p>
            <p>Updated: {(new Date(podcast.updated)).toLocaleDateString('en-GB',{hour: '2-digit', minute:'2-digit'})}</p>
              Added on: {(new Date()).toLocaleDateString('en-GB',{hour: '2-digit', minute:'2-digit'})}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite podcasts yet. Start adding some!</p>
      )}
    </div>
  );
};
export default FavoritePodcast;