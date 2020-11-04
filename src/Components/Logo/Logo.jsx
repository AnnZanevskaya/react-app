import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { setSearch } from "../../Redux/actions";

const Logo = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    function redirectToDefault() {
        dispatch(setSearch(""));
        history.push('/');
    }

    return (
        <h1 className="logo" onClick={() => redirectToDefault()}>
            <span className="logo-bold">netflix</span>roulette
        </h1>
    )
};

export default Logo
