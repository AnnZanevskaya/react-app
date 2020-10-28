import React from "react";

import Header from "../../Components/Header";
import MoviesContent from "../../Components/MoviesContent";
import Footer from "../../Components/Footer";
import { setSearch, getMovie } from "../../Redux/actions";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function HomePage() {
  const dispatch = useDispatch();
  const route = useLocation().pathname;

  let searchQuery = "";

  if (route === "/search") {
    const query = useQuery();
    searchQuery = query.get("q");
  }

  dispatch(setSearch(searchQuery));

  if (route.includes("/film")) {
    const { id } = useParams();
    dispatch(getMovie(id));
  }

  const history = useHistory();
  const search = useSelector(state => state.searchParams.search);

  const onMovieDetailsClose = () => {
    dispatch(getMovie(null));
    history.push(`/search?q=${search}`);
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <>
      <Header onClose={onMovieDetailsClose} />
      <MoviesContent />
      <Footer />
    </>
  );
}

export default HomePage;
