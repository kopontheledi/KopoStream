import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Hero.css";

export default function Hero() {
  const [shows, setShows] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const slideWidth = 200;
  const slidesToShow = 5;
  const containerWidth = slideWidth * shows.length;

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://podcast-api.netlify.app/shows")
      .then((response) => {
        // Update the state with the fetched data
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Move the carousel continuously like a marquee
    const interval = setInterval(() => {
      const newPosition = carouselPosition - slideWidth;
      setCarouselPosition((prevPosition) =>
        prevPosition <= -containerWidth + slideWidth * slidesToShow
          ? 0
          : newPosition
      );
    }, 1000); // Adjust the interval speed as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [carouselPosition, containerWidth, slideWidth, slidesToShow]);

  return (
    <div className="hero-section">
      <div className="carousel-container">
        <div
          className="show-info"
          style={{
            transform: `translateX(${carouselPosition}px)`,
            width: `${containerWidth}px`,
          }}
        >
          {shows.map((show) => (
            <div key={show.id}>
              <img src={show.image} alt={show.name} width={slideWidth} />
              <h1>{show.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
