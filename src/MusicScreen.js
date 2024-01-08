// Importing the required files and components
import { Component } from "react";

// This is the music screen component
export default class MusicScreen extends Component {

    render() {
        return (<>
            <div id="musicScreen">

                <h2>Music</h2>
                <hr />

                <button>All Songs</button>
                <button>Artist</button>
                <button>Albums</button>

            </div>
        </>);

    }
}