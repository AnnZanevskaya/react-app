import React from "react";

import MovieActionsMenu from '../MovieActionsMenu';
import MovieEdit from '../MovieEdit';
import MovieDelete from '../MovieDelete';
import { useToggle } from '../../Hooks/hooks';
import { useRouter } from 'next/router';


const MovieCard = ({ movie }) => {
    const router = useRouter();

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

    function onDetailsPreview(id){
        router.push(`/film/${id}`);
    }

    return (
        <>
            <div className="movie-card" onClick={() => onDetailsPreview(movie.id)}>
                <div className="movie-card__img movie-card__action-menu">
                    <img width="320" height="460" src={movie.poster_path} onClick={closeMovieActionMenu}></img>

                    <MovieActionsMenu
                        toggleMovieActionMenu={toggleMovieActionMenu}
                        show={isMovieActionMenuShow}
                        editAction={toggleMovieEditModal}
                        deleteAction={toggleMovieDeleteModal} />
                </div>
                <div className="movie-card__info">
                    <div className="movie-card__body">
                        <p className="movie-card__desc">{movie.title}</p>
                        <p className="movie-card__genre">{movie.genres.join(', ')}</p>
                    </div>
                    <div className="movie-card__chip">
                        <p className="movie-card__year">{new Date(movie.release_date).getFullYear()}</p>
                    </div>
                </div>
            </div>

            <MovieEdit movie={movie} show={isMovieEditModalShow} handleClose={toggleMovieEditModal} />
            <MovieDelete show={isMovieDeleteModalShow} handleClose={toggleMovieDeleteModal} movieId={movie.id} />
        </>
    )
}

export default MovieCard;
