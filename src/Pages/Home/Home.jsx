import React from "react";

import Header from "../../Components/Header";
import MoviesContent from "../../Components/MoviesContent";
import Footer from "../../Components/Footer";
import { setSearch, getMovie } from "../../Redux/actions";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';

function HomePage() {
  const dispatch = useDispatch();

  const router = useRouter();
   const route = router.pathname;
   
   if (route === "/search") {
    const query = router.query;
    const searchQuery = query.q;
    dispatch(setSearch(searchQuery));
  }

  if (route.includes("/film")) {
    const { id } = router.query;
    dispatch(getMovie(id));
  }

  const search = useSelector(state => state.searchParams.search);

  const onMovieDetailsClose = () => {
    dispatch(getMovie(null));
    router.push(`/search?q=${search}`);
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
