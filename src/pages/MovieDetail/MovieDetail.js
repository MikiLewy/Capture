import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { MovieState } from "movieState";
import {
  Details,
  HeadLine,
  Awards,
  Award,
  ImageWrapper,
} from "./MovieDetail.styles";

const MovieDetail = () => {
  const { pathname } = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const [currentMovie] = movies.filter(
      (stateMovie) => stateMovie.url === pathname
    );
    setMovie(currentMovie);
  }, [movies, pathname]);

  return (
    <>
      {movie ? (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="img" />
          </HeadLine>
          <Awards>
            {movie.awards.map(({ title, description }) => (
              <Award>
                <h3>{title}</h3>
                <div className="line"></div>
                <p>{description}</p>
              </Award>
            ))}
          </Awards>
          <ImageWrapper>
            <img src={movie.secondaryImg} alt="" />
          </ImageWrapper>
        </Details>
      ) : (
        <h1 style={{ color: "white", textAlign: "center", marginTop: "40vh" }}>
          Sory we can't load content. Try again later.
        </h1>
      )}
    </>
  );
};

export default MovieDetail;
