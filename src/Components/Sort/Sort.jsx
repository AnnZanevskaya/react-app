import React, { useState } from "react";
import { useDispatch, connect } from 'react-redux';

import { fetchMovies, setSortOrder } from "../../Redux/actions";

import './style.css';

const Sort = ({ filter,  search}) => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('release_data');

    function handleChange(event) {
        dispatch(setSortOrder(event.target.value));

        dispatch(fetchMovies(search, filter, event.target.value))
        setActiveItem(event.target.value);
    }

    return (
        <div className="content__sort">
            <h4 className="sort__title">Sort by</h4>
            <select className="sort__select" value={activeItem} onChange={handleChange}>
                <option value="release_date">Release Date</option>
                <option value="runtime">Runtime</option>
            </select>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        filter: state.movies.genre,
        search: state.movies.search
    };
};

export default connect(mapStateToProps, null)(Sort);
