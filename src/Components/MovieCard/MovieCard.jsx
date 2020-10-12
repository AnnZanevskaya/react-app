import React, { useState, useCallback, useContext } from "react";
import PropTypes, { func } from 'prop-types';

import MovieActionsMenu from '../MovieActionsMenu';
import MovieEdit from '../MovieEdit';
import MovieDelete from '../MovieDelete';
import { useToggle } from '../../Hooks/hooks';

import './style.css';
import HeaderContext from "../../Providers/HeaderContext";

const MovieCard = ({ movie }) => {
    const { onMovieDetails } = useContext(HeaderContext);

    const onDetailsPreview = useCallback(() => onMovieDetails(movie), [
        movie,
        onMovieDetails,
    ]);


    const [isMovieActionMenuShow, setIsShowing] = useToggle();
    const [isMovieEditModalShow, setIsShowingEditModal] = useToggle();
    const [isMovieDeleteModalShow, setIsShowingDeleteModal] = useToggle();

    function toggleMovieActionMenu() {
        setIsShowing();
    }

    function closeMovieActionMenu() {
        setIsShowing(false);
    }

    function toggleMovieEditModal() {
        setIsShowingEditModal();
        closeMovieActionMenu();
    }

    function toggleMovieDeleteModal() {
        setIsShowingDeleteModal();
        closeMovieActionMenu();
    }

    return (
        <>
            <div className="movie-card" onClick={onDetailsPreview}>
                <div className="movie-card__img movie-card__action-menu">
                    <img width="320" height="460" src={movie.poster_path} onClick={closeMovieActionMenu}></img>

                    <MovieActionsMenu
                        toggleMovieActionMenu={toggleMovieActionMenu}
                        show={isMovieActionMenuShow}
                        editAction={toggleMovieEditModal}
                        deleteAction={toggleMovieDeleteModal} />
                </div>
                <div className="movie-card__info">
                    <div>
                        <p className="movie-card__desc">{movie.title}</p>
                        <p className="movie-card__genre">{movie.genres.join(', ')}</p>
                    </div>
                    <div className="movie-card__chip">
                        <p className="movie-card__year">{new Date(movie.release_date).getFullYear()}</p>
                    </div>
                </div>
            </div>
{/* 
            <MovieEdit movie={movie} show={isMovieEditModalShow} handleClose={toggleMovieEditModal} />
            <MovieDelete show={isMovieDeleteModalShow} handleClose={toggleMovieDeleteModal} /> */}
        </>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
}

MovieCard.defaultProps = {
    imageSrc: "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
    year: "N/A"
}

export default MovieCard;
