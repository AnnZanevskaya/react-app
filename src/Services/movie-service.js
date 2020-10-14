import axios from 'axios';
import {
    movies
} from "../Constants/constants.js";

const movieServiceUrl = "http://localhost:4000/";

async function sendRequest(resourceUrl, method, requestBody = null) {
    let result = null;

    await axios({
            method: method,
            url: resourceUrl,
            data: requestBody
        })
        .then((response) => {
            result = (response.data.data) ? response.data.data : response.data;
        });

    return result;
}

export async function getAllMovies() {
    const resourceUrl = `${movieServiceUrl}movies`;
    const movies = await sendRequest(resourceUrl, 'GET');

    return movies;
}

export async function getMovies(search, filter, sortBy) {
    const searchBy = "title";
    const sortOrder = "desc";
    const limit = 9;

    const searchParams = search ? `&search=${search}&searchBy=${searchBy}` : "";
    const filterParams = filter !== "all" ? `&filter=${filter}` : "";

    const resourceUrl = `${movieServiceUrl}movies?sortOrder=${sortOrder}&limit=${limit}${searchParams}${filterParams}&sortBy=${sortBy}`;
    const movies = await sendRequest(resourceUrl, 'GET');

    return movies;
}

export async function createMovie(movie) {
    const resourceUrl = `${movieServiceUrl}movies`;
    const result = await sendRequest(resourceUrl, 'POST', movie);
   
    return result;
}

export async function updateMovie(movie) {
    const resourceUrl = `${movieServiceUrl}movies`;
    await sendRequest(resourceUrl, 'PUT', movie);
}

export async function deleteMovie(movieId) {
    const resourceUrl = `${movieServiceUrl}movies/${movieId}`;
    await sendRequest(resourceUrl, 'DELETE');
}