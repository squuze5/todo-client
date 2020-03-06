import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div>
                This is home page <br />
                <Button component={Link} to="/login" color="primary" variant="outlined">
                    Login
                </Button>

                <Button component={Link} to="/signup" variant="outlined" color="primary">
                    Sign Up
                </Button>
            </div>
        )
    }
}

export default Home;