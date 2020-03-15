import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import './Home.scss';
import VideoBG from '../../assets/video/bg-main.mp4';

class Home extends Component {
    render() {
        return (
            <div className="home-screen">
                <video autoPlay loop muted className="bgvideo">
                    <source src={VideoBG} type="video/mp4"></source>
                </video>

                <div className="home-text">
                    <div className="main-text">
                        Your personal assistant for every day :)
                    </div>

                    <div>
                        <Button component={Link} to="/login" color="primary" variant="outlined">
                            Login
                        </Button>

                        <Button component={Link} to="/signup" variant="outlined" color="primary">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;