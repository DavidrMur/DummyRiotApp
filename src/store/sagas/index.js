import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getSummonerId, getMasteryAllChampions, getRecentMatchHistory } from './summoner';

export function* watchSummoner(){
    yield takeEvery(actionTypes.GET_SUMMONER_ID, getSummonerId);
    yield takeEvery(actionTypes.GET_MASTERY_ALL_CHAMPIONS, getMasteryAllChampions);
    yield takeEvery(actionTypes.GET_RECENT_MATCH_HISTORY, getRecentMatchHistory);
}