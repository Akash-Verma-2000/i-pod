// Importing all the required files and components
import { Component } from "react";
import MenuBar from "./MenuBar";
import MusicScreen from "./MusicScreen";
import SettingScreen from "./SettingScreen";
import GamesScreen from "./GamesScreen";
import CoverFlow from "./CoverFlow";
import './App.css'

// This componenet is for Main Screen of the i-Pod
export default class MainScreen extends Component {

    render() {

        // Destructuring all the properties passed as the props
        const { showMenu,
            musicScreen,
            settingScreen,
            gamesScreen,
            coverFlow,

            showMusicScreen,
            showSettingScreen,
            showGamesScreen,
            showCoverFlow,

            openMenu,
        } = this.props;

        return (<>

            <div className='main-screen'>

                {/* This is compont is the Main Menu bar of the i-Pod */}
                {showMenu ? <MenuBar

                    // Passing all the display related functions as the props
                    showCoverFlow={showCoverFlow}
                    showSettingScreen={showSettingScreen}
                    showGamesScreen={showGamesScreen}
                    showMusicScreen={showMusicScreen}
                    openMenu={openMenu}

                /> : null}

                {/* All the menu screens  */}
                {coverFlow ? <CoverFlow /> : null}
                {gamesScreen ? <GamesScreen /> : null}
                {musicScreen ? <MusicScreen /> : null}
                {settingScreen ? <SettingScreen /> : null}

            </div>
        </>);
    }
}