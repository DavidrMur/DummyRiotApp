import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {ThemeContext} from '../../shared/ThemeContext';
import './LandingPage.css';
import { getSummonerId } from '../../store/sagas/summoner';

class LandingPage extends React.Component<Props, State> {
    
    constructor(props: any){
        super(props);

        this.state = {
            invalidation: '',
            summonerName: ''
        };
    }
    
    onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //Summoner name requirements
        if (((event.target.value.length >=3 && event.target.value.length <= 16)) && (event.target.value).match("^[A-z0-9]+$")){
            this.setState({invalidation: ''})
            this.setState({summonerName: event.target.value});
        } else if (event.target.value.length < 3){
            this.setState({invalidation: 'Too short'})
        } else if (event.target.value.length > 16) {
            this.setState({invalidation: 'Too long'})
        }

        if ( !(event.target.value).match("^[A-z0-9]+$") && !this.state.invalidation && event.target.value.length > 0){
            this.setState({invalidation: 'No special characters'})
        }

        if (event.target.value.length === 0 ){
            this.setState({invalidation: ''})
        }

    }

    onSubmitHandler = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        this.props.getSummonerId(this.state.summonerName);
        this.props.history.push('/SummonerProfile');
    }
        
    componentDidMount = () => {
        return true;
    }
    
    render(){
        let errorMessage: null | React.ReactNode = null;
        if(this.props.error) {
            errorMessage = (
                <div className='error'>
                    <p>Please try a different summoner name</p>
                </div>
            );
        }

        return (
            <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => (
                <div className={'landing-content--' + theme}>
                    <h1 className={'landing-title--' + theme}>Welcome to my dummy Riot API App!</h1>
                    <form onSubmit={this.onSubmitHandler} >
                    <input
                        className={'input-field--' + theme} 
                        type='text' 
                        placeholder='Summoner Name' 
                        onChange={(event) => this.onChangeHandler(event)} 
                        />
                    </form>
                    <p>{this.state.invalidation}</p>
                    {errorMessage}
                    <button
                        className={'landing-button--' + theme}
                        onClick={toggleTheme} >
                        toggleTheme
                        </button>
                </div>
                    )}
                    </ThemeContext.Consumer>
        )
    }
}

export interface Props{
    error: any,
    getSummonerId: (summonerName: string) => string;
    history: any,
}

export interface State {
    invalidation: string,
    summonerName: string,
}

const mapStateToProps = (state: any) => {
    return {
        error: state.summoner.error
    };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        getSummonerId: (summonerName: string) => dispatch(actions.getSummonerId(summonerName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);