import React, { useState, useCallback, useContext } from "react";
import PropTypes, { func } from 'prop-types';

import MovieActionsMenu from '../MovieActionsMenu';
import MovieEdit from '../MovieEdit';
import MovieDelete from '../MovieDelete';

import './style.css';
import HeaderContext from "../../Providers/HeaderContext";

const MovieCard = ({ movie }) => {
    const { onMovieDetails } = useContext(HeaderContext);

    const onDetailsPreview = useCallback(() => onMovieDetails(movie), [
        movie,
        onMovieDetails,
    ]);

    const [isMovieActionMenuShow, setIsShowing] = useState(false);
    const [isMovieEditModalShow, setIsShowingEditModal] = useState(false);
    const [isMovieDeleteModalShow, setIsShowingDeleteModal] = useState(false);

    function toggleMovieActionMenu() {
        setIsShowing(!isMovieActionMenuShow);
    }

    function closeMovieActionMenu() {
        setIsShowing(false);
    }

    function toggleMovieEditModal() {
        setIsShowingEditModal(!isMovieEditModalShow);
        closeMovieActionMenu();
    }

    function toggleMovieDeleteModal() {
        setIsShowingDeleteModal(!isMovieDeleteModalShow);
        closeMovieActionMenu();
    }

    return (
        <>
            <div className="movie-card" onClick={onDetailsPreview}>
                <div className="movie-card__img movie-card__action-menu">
                    <img width="320" height="460" src={movie.imageSrc} onClick={closeMovieActionMenu}></img>

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
                        <p className="movie-card__year">{new Date(movie.year).getFullYear()}</p>
                    </div>
                </div>
            </div>

            <MovieEdit movie={movie} show={isMovieEditModalShow} handleClose={toggleMovieEditModal} />
            <MovieDelete show={isMovieDeleteModalShow} handleClose={toggleMovieDeleteModal} />
        </>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string
}

MovieCard.defaultProps = {
    imageSrc: "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
    year: "N/A"
}

export default MovieCard;
