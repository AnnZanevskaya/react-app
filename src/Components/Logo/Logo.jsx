import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { setSearch } from "../../Redux/actions";

const Logo = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const router = useRouter();

    function redirectToDefault() {
        dispatch(setSearch(""));
        router.push(`/search?q=`);
    }

    return (
        <h1 className="logo" onClick={() => redirectToDefault()}>
            <span className="logo-bold">netflix</span>roulette
        </h1>
    )
};

export default Logo
