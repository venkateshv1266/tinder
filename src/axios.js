import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinderbackend-backend.herokuapp.com/"
});

export default instance; 