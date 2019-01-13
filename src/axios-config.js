import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/',
    /*headers: {
        'X-Riot-Token': 'RGAPI-148648a6-fdbe-4ee4-9db6-3e19937b2eca',
        'Access-Control-Allow-Origin':'http://localhost:3000',
    }*/


});

export default instance;