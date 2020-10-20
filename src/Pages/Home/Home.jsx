import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

import Header from "../../Components/Header";
import MoviesContent from "../../Components/MoviesContent";
import Footer from "../../Components/Footer";
import HeaderContext from "../../Providers/HeaderContext";
import { fetchMovies, setSearch } from "../../Redux/actions";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HomePage() {
  const [movie, setDetails] = useState();
  const dispatch = useDispatch();
  const route = useLocation().pathname;
  
  let searchQuery = "";

  if (route === "/search") {
      const query = useQuery();
      searchQuery = query.get("q");

      dispatch(setSearch(searchQuery));
  }

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
