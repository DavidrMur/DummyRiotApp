import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Mastery from './Mastery/Mastery';
import MatchHistory from './MatchHistory/MatchHistory';
import './SummonerProfile.css';

class SummonerProfile extends Component {

    onClickHandler = () => {
        this.props.getMasteryAllChampions(this.props.id);
    }

    render(){
        let summonerProfile = null;
        if (this.props.name!== null){
            summonerProfile = (
                <div className='profile-info'>
                    <p>{this.props.name}</p>
                    <p>PUUID: {this.props.puuid}</p>
                    <p>Summoner level: {this.props.summonerLevel}</p>
                    <p>Updated last: {this.props.revisionDate}</p>
                    <p>ID: {this.props.id}</p>
                    <p>Account ID: {this.props.accountId}</p>
                </div>
            )
        }
        return(
            <div className ='profile-content'>
                <p className ='profile-title'>{this.props.name ? this.props.name + '\'s profile' : null}</p>
                {summonerProfile}
                <Mastery />
                <MatchHistory />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        profileIconId: state.summoner.profileIconId,
        name: state.summoner.name,
        puuid: state.summoner.puuid,
        summonerLevel: state.summoner.summonerLevel,
        revisionDate: state.summoner.revisionDate,
        id: state.summoner.id,
        accountId: state.summoner.accountId

    };
};

const mapDispathToProps = dispatch => {
    return {
        getMasteryAllChampions: (summonerId) => dispatch(actions.getMasteryAllChampions(summonerId))
    };
};

export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);