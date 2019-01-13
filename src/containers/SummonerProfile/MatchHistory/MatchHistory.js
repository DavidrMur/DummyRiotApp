import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class MatchHistory extends Component {
    
    state = {
        matchCount: 10,
        showHistory: false
    }

    getRecentMatchHistory = () => {
        this.props.getRecentMatchHistory(this.props.accountId, this.state.matchCount);
        this.setState({showHistory: true});
    };

    render(){

        let matchHistory = null;

        if (this.state.showHistory && this.props.recentMatchHistory !== undefined){
            matchHistory = (
                <div className='match-history__content'>
                    {this.props.recentMatchHistory.matches[0].champion}
                </div>
            )
        }
        return (
            <div className='match-history'>
                <button onClick={this.getRecentMatchHistory}>View Match History</button>
                {matchHistory}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accountId: state.summoner.accountId,
        recentMatchHistory: state.summoner.recentMatchHistory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRecentMatchHistory: (accountId, matchCount) => dispatch(actions.getRecentMatchHistory(accountId, matchCount))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MatchHistory);