import React, { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Search = ({ searchQ }) => {
    const history = useHistory();
    const [searchPhrase, setSearchPhrase] = useState(searchQ);

    const handleChange = event => {
        setSearchPhrase(event.target.value);
    };

    const search = () => {
        history.push(`/search?q=${searchPhrase}`);
    }

    return (
        <>
            <h2 className="header__description description">Find your movie</h2>

            <div className="header__search search">
                <form className="search__form" onSubmit={(e) => e.preventDefault()}>
                    <input className="search__input" placeholder="What do you want to watch?" value={searchPhrase} onChange={handleChange}></input>
                    <button className="search__button button button-red" onClick={() => search()}>Search</button>
                </form>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        sortOrder: state.searchParams.sortOrder,
        filter: state.searchParams.filter,
        searchQ: state.searchParams.search
    };
};

export default connect(mapStateToProps, null)(Search);
