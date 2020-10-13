import React, { useState } from "react";
import { useDispatch, connect } from 'react-redux';

import { fetchMovies, setFilter } from "../../Redux/actions";

const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']

const Filter = ({sortOrder, search}) => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('all');

    const filterByGenres = (genre) => {
        dispatch(setFilter(genre));
        dispatch(fetchMovies(search, genre, sortOrder));
        setActiveItem(genre);
    }

    return (
        <div className="content__filter">
            <ul className="filter">
                {genres.map((genre) => {
                    const activeClass = activeItem === genre ? 'filter__item_active' : '';

                    return (
                        <li key={genre} onClick={() => filterByGenres(genre)} className={`filter__item ${activeClass}`}>{genre}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sortOrder: state.movies.sortOrder,
        search: state.movies.search
    };
};

export default connect(mapStateToProps, null)(Filter);
