// Importing required files and modules.
import { Component } from "react";

// This is Component contains all the buttons of the i-Pod
export default class Button extends Component {

    render() {

        // Destructuring the property passed as the props 
        const { openMenu } = this.props;
        return (<>

            <div className='circle-button'>

                <button id="menu-button" onClick={openMenu}>Menu</button >

                <div className="middle-button-row">

                    <button id="backward-button"><i class="bi bi-skip-backward-fill"></i></button >
                    <button id="middle-button"></button >
                    <button id="forward-button"><i class="bi bi-skip-forward-fill"></i></button >

                </div>

                <button id="play-pause-button"><i class="bi bi-play-fill"></i><i class="bi bi-pause-fill"></i></button >

            </div>
        </>);
    }
}