import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {ThemeContext, themes} from './shared/ThemeContext';
import LandingPage from './containers/LandingPage/LandingPage';
import SummonerProfile from './containers/SummonerProfile/SummonerProfile';

import './App.css';

class App extends Component {

  toggleTheme = () => {
    this.setState({theme: this.state.theme === themes.dark ? themes.light : themes.dark})
  }
  
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' component={LandingPage} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.summonerEntry){
      routes = (
        <Switch>
            <Route path='/SummonerProfile' component={SummonerProfile} />
            <Route path='/' exact component={LandingPage} />
            <Redirect to='/' />
         </Switch>
      )
    }
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          {routes}
        </ThemeContext.Provider>
      </div>
    );
  }
}

 const mapStateToProps = state => {
   return {
     summonerEntry: state.summoner.id !== undefined
   }
 }

export default withRouter(connect(mapStateToProps)(App));
