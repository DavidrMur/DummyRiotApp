import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/',
});

export default instance;