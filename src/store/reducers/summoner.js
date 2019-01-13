import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'; 
import { Record } from 'immutable';

const myRecord = Record ({
    summonerProfile: {
        profileIconId: '',
        name: '',
        puuid: '',
        summonerLevel: '',
        revisionDate: '',
        id: '',
        accountId: '',
        allChampionMastery: '',
        recentMatchHistory: ''
    },
    error: false
})

const initialState = myRecord ({
    summonerProfile: {
        profileIconId: '',
        name: '',
        puuid: '',
        summonerLevel: '',
        revisionDate: '',
        id: '',
        accountId: '',
        allChampionMastery: '',
        recentMatchHistory: ''
    },
    error: false
});


const setSummonerProfile = (state, action) => {
    return updateObject(state, 
        {
            profileIconId: action.profileIconId,
            name: action.name,
            puuid: action.puuid,
            summonerLevel: action.summonerLevel,
            revisionDate: action.revisionDate,
            id: action.id,
            accountId: action.accountId
        });
    
        // const test =  state.set('summonerProfile', updatedSummonerProfile);
        // console.log(test);
        // return test;
};

const setMasteryAllChampions = (state, action) => {
    return updateObject(state, {
            allChampionMastery: action.payload
    })
};

const setRecentMatchHistory = (state, action) => {
    return updateObject(state, {
        recentMatchHistory: action.payload
    })
}

const setError = (state, action) => {
    return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_SUMMONER_ID:
            return state;
        case actionTypes.SET_SUMMONER_PROFILE:
            return setSummonerProfile(state, action);
        case actionTypes.SET_MASTERY_ALL_CHAMPIONS:
            return setMasteryAllChampions(state, action); 
        case actionTypes.SET_RECENT_MATCH_HISTORY:
            return setRecentMatchHistory(state, action);
        case actionTypes.SET_ERROR:
            return setError(state,action);   
        default:
            return state;
    }
}

export default reducer;