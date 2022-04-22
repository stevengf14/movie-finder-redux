import axios from "axios";

const baseURL = 'https://www.omdbapi.com/?apiKey=ffd0c3a5';

export const apiCall = (URL, data, headers, method) => axios({
    method,
    url: baseURL + URL,
    data,
    headers
});