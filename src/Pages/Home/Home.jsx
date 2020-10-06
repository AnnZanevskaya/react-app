import React, { useState, useCallback, useMemo } from "react";

import Header from "../../Components/Header";
import MoviesContent from "../../Components/MoviesContent";
import Footer from "../../Components/Footer";
import HeaderContext from "../../Providers/HeaderContext";

export default function HomePage() {
  const [movie, setDetails] = useState();

  const onMovieDetails = useCallback(
    (movie) => {
      setDetails(movie);
    },
    [setDetails]
  );

  const movieDetails = useMemo(
    () => ({ onMovieDetails }),
    [onMovieDetails],
  );

  const onMovieDetailsClose = () => {
    setDetails(null);
  }

  return (
    <HeaderContext.Provider value={movieDetails}>
      <Header movie={movie} onClose={onMovieDetailsClose} />
      <MoviesContent />
      <Footer />
    </HeaderContext.Provider>
  );
}
