import axios from '../../axios-config';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import {API_KEY} from '../../constants';


export function* getSummonerId(action){
    try {
        const summonerName = action.summonerName;
        console.log(action);
        const response = yield axios.get('lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + API_KEY);
        console.log ('Saga response');
        yield put (actions.setSummonerProfile(response.data))
    } catch (error) {
        yield put (actions.setError());
    }
}

export function* getMasteryAllChampions(action){
    try {
        const summonerId = action.summonerId;
        const response = yield axios.get('lol/champion-mastery/v4/champion-masteries/by-summoner/' + summonerId + '?api_key=' + API_KEY);
        console.log(response.data);
        yield put (actions.setMasteryAllChampions(response.data))
    } catch (error){
        console.log(error.data);
    }
}

export function* getRecentMatchHistory(action){
    try {
        const matchCount = action.matchCount;
        const accountId = action.accountId;
        const response = yield axios.get('lol/match/v4/matchlists/by-account/' + accountId + '?endIndex=' + matchCount + '&api_key=' + API_KEY);
        console.log(response.data);
        yield put (actions.setRecentMatchHistory(response.data));
    } catch (error) {
        console.log(error.data);
    }
}

