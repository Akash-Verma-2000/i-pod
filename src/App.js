// Importing all the required files and components
import './App.css';
import { Component } from 'react';
import MainScreen from './MainScreen';
import Button from './Buttons';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,        //If true, Menu will appear on the screen
      musicScreen: false,     //If true, Music screen will appear on the screen
      settingScreen: false,   //If true, Setting screen will appear on the screen
      gamesScreen: false,     //If true, Games screen will appear on the screen
      coverFlow: false,       //If true, Cover Flow will appear on the screen
    }
  }


  // This function will only display Music Screen and rest of the things will get disappear
  showMusicScreen = () => {
    this.setState({
      musicScreen: true,
      settingScreen: false,
      gamesScreen: false,
      coverFlow: false,
      showMenu: false,
    });
  }

  // This function will only display Setting Screen and rest of the things will get disappear
  showSettingScreen = () => {
    this.setState({
      musicScreen: false,
      settingScreen: true,
      gamesScreen: false,
      coverFlow: false,
      showMenu: false,
    });
  }

  // This function will only display Games Screen and rest of the things will get disappear
  showGamesScreen = () => {
    this.setState({
      musicScreen: false,
      settingScreen: false,
      gamesScreen: true,
      coverFlow: false,
      showMenu: false,
    });
  }

  // This function will only display Cover Flow and rest of the things will get disappear
  showCoverFlow = () => {
    this.setState({
      musicScreen: false,
      settingScreen: false,
      gamesScreen: false,
      coverFlow: true,
      showMenu: false,
    });
  }

  // This function will only display Main Menu and rest of the things will get disappear
  openMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
      musicScreen: false,
      settingScreen: false,
      gamesScreen: false,
      coverFlow: false,
    });

  }

  render() {

    return (
      <div className='main-body' >

        {/* This is the main screen coponent in which every other screen will be displayed */}
        <MainScreen

          //Passing all the state data as props
          showMenu={this.state.showMenu}
          musicScreen={this.state.musicScreen}
          settingScreen={this.state.settingScreen}
          gamesScreen={this.state.gamesScreen}
          coverFlow={this.state.coverFlow}

          //Passing all the display functions as props
          showMusicScreen={this.showMusicScreen}
          showSettingScreen={this.showSettingScreen}
          showGamesScreen={this.showGamesScreen}
          showCoverFlow={this.showCoverFlow}
          openMenu={this.openMenu}

        />

        {/* This is the button component of the i-Pod */}
        <Button openMenu={this.openMenu} />

      </div>

    );
  }

}