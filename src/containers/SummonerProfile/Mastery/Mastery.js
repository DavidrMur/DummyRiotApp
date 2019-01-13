import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import MasteryCard from '../../../components/UI/MasteryCard/MasteryCard';
import './Mastery.css';

class Mastery extends Component {
    state = {
        selectionCount: 0
    }
    
    onClickHandler = () => {
        this.props.getMasteryAllChampions(this.props.id)
        this.setState({selectionCount:3});
    }
    
    setSelectionToAll = () => {
        this.setState({selectionCount: this.props.championMasteries.length-1});
    }
    
    increaseSelection = () => {
        switch(this.state.selectionCount){
            case 3:
                if(this.props.championMasteries.length > 5) {this.setState({selectionCount: 6});} else {this.setSelectionToAll()}
                break;
            case 6:
                if(this.props.championMasteries.length > 11) {this.setState({selectionCount: 12});} else {this.setSelectionToAll()}
                break;
            case 12:
                this.setSelectionToAll();
                break;
            default:
                break;        
        }
    }

    clearSelection = () => {
        this.setState({selectionCount: 0});
    }
    
    render(){
        let championMasterySelection = null
        if (this.props.championMasteries !== undefined){
            championMasterySelection = (this.props.championMasteries.slice(0,this.state.selectionCount)).map((champion) => {
            return <MasteryCard
                key={champion.championId}
                id={champion.championId}
                championPoints={champion.championPoints}
                championLevel={champion.championLevel}
            />
        })}
        
        return (
            <div className='mastery-content'>
                <button onClick={this.onClickHandler}>Click me!</button>
                <div className='masteries'>{championMasterySelection}</div>
                {//Please clean this up
                this.props.championMasteries !== undefined && this.state.selectionCount !== 0 && this.state.selectionCount !== this.props.championMasteries.length-1
                    ? <button onClick={this.increaseSelection}>{
                        this.state.selectionCount !== 12 ? 'View more' : 'View all'}</button> 
                    : this.props.championMasteries !== undefined && this.state.selectionCount !== 0 && this.state.selectionCount === this.props.championMasteries.length-1 
                        ? <button onClick={this.clearSelection}>Clear all</button>
                        : null}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        id: state.summoner.id,
        championMasteries: state.summoner.allChampionMastery
    };
};

const mapDispathToProps = dispatch => {
    return {
        getMasteryAllChampions: (summonerId) => dispatch(actions.getMasteryAllChampions(summonerId)),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Mastery);