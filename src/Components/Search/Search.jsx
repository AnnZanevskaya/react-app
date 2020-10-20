import React, {useState} from "react";
import { useDispatch, connect } from 'react-redux';
import { fetchMovies, setSearch } from "../../Redux/actions";


const Search = ({ sortOrder, filter }) => {
    const dispatch = useDispatch();
    const [searchPhrase, setSearchPhrase] = useState('');

    const handleChange = event => {
        setSearchPhrase(event.target.value);
    };

    const search = () => {
        dispatch(setSearch(searchPhrase));
        dispatch(fetchMovies(searchPhrase, filter, sortOrder));
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
        filter: state.searchParams.filter
    };
};

export default connect(mapStateToProps, null)(Search);
