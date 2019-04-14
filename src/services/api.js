import axios from 'axios';

const api = axios.create({
    baseURL: 'https://matsufrg-omnistack-backend.herokuapp.com',
});

export default api;