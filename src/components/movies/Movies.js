import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { MoviesData } from "../../api/moviesData";
import "./move.css";
import { Link } from "react-router-dom";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    MoviesData()
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  if (error) {
    return (
      <div>
        <h2>error happend</h2>
        <h3> {error}</h3>
      </div>
    );
  }
  console.log(movie);
  return (
    <div>
      {isloading && <BeatLoader color="#36d7b7" />}
      {movie.map((mov) => (
        <div key={mov.id}>
          <div className="move">
            <img className="moveimg" src={mov.big_image}></img>

            {mov.description}
            <pre> {mov.genre}</pre>
            <Link href={mov.imdb_link} />
            <pre> rating:{mov.rating}</pre>
            <pre> year :{mov.year}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
