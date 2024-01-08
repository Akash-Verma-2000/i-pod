// Importing all the required files and components
import { Component } from "react";
import './App.css'

export default class MenuBar extends Component {

    render() {

        // Destructuring all the properties passed as the props
        const { showCoverFlow, showSettingScreen, showGamesScreen, showMusicScreen } = this.props;

        return (<>
            <div id="menu-bar">

                <h2>iPod.js</h2>
                <hr />

                <button onClick={showCoverFlow} >Cover Flow</button>
                <button onClick={showMusicScreen}>Music</button>
                <button onClick={showGamesScreen}>Games</button>
                <button onClick={showSettingScreen}>Settings</button>

            </div>
        </>);
    }
}