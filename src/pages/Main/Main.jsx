import React, { Component } from 'react';

// Default style / Icon
import './Main.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Main extends Component {
    render() {
        return (
            <div className="main-section">

                <div className="main-navbar">
                    <div className="logo">this is logo</div>

                    <div className="buttons-main">
                        <button className="btn-profile btn-main">
                            <PersonOutlineIcon className="icon-user" />
                            Profile
                        </button>
                        <button className="btn-logout btn-main">
                            <ExitToAppIcon />
                            Log Out
                        </button>
                    </div>
                </div>

                <div className="background-main"></div>
                    
                <div className="content-main">
                    <span>Your projects</span>
                    <h3>Welcome back, Nikolas!</h3>
                    <p>Select the project you want to work on or create a new one.</p>
                </div>

            </div>
        )
    }
}

export default Main;