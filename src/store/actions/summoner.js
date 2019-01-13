import * as actionTypes from './actionTypes';

export const getSummonerId = (summonerName) => {
    return {
        type: actionTypes.GET_SUMMONER_ID,
        summonerName: summonerName
    };
};

export const setSummonerProfile = (payload) => {
    return {
        type: actionTypes.SET_SUMMONER_PROFILE,
        profileIconId: payload.profileIconId,
        name: payload.name,
        puuid: payload.puuid,
        summonerLevel: payload.summonerLevel,
        revisionDate: payload.revisionDate,
        id: payload.id,
        accountId: payload.accountId

    };
};

export const getMasteryAllChampions = summonerId => {
    return {
        type: actionTypes.GET_MASTERY_ALL_CHAMPIONS,
        summonerId: summonerId
    };
};

export const setMasteryAllChampions = payload => {
    return {
        type: actionTypes.SET_MASTERY_ALL_CHAMPIONS,
        payload: payload
    }
}

export const getRecentMatchHistory = (accountId, matchCount) => {
    return {
        type: actionTypes.GET_RECENT_MATCH_HISTORY,
        accountId: accountId,
        matchCount: matchCount
    }
}

export const setRecentMatchHistory = payload => {
    return {
        type: actionTypes.SET_RECENT_MATCH_HISTORY,
        payload: payload
    };
};

export const setError = error => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    };
};