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
            result = response.data.data;
        });

    return result;
}

export async function getAllMovies() {
    const resourceUrl = `${movieServiceUrl}movies`;
    const movies = await sendRequest(resourceUrl, 'GET');

    return movies;
}