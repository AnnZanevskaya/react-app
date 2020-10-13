import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { fetchMovies } from "../../Redux/actions";

const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']

const Filter = () => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('all');

    const filterByGenres = (genre) => {
        dispatch(fetchMovies("", genre))
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

export default Filter;
