import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
// Image, Icon
import LoginImage from '../../assets/image/login-img.jpg';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
// Default style
import './SignIn.scss';


class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">

                <div className="left-container">
                    <img src={LoginImage} alt="login" />
                    <div className="description-left">
                        <h1>Board to do more at your work</h1>
                        <p>Get ready for your presence to make sense</p>
                    </div>
                </div>

                <div className="right-container">

                    <div className="description-right">
                        <h1>Wellcome!</h1>
                        <p>Sign in to your account</p>
                    </div>

                    <div className="login-form">
                        <form action="#">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter this you email" />

                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="**********" />

                            <Button component={Link} to="/signup" className="newAcount">
                                No account?
                            </Button>
                            <div className="button-submit">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="social-icon">
                        <a href="telegram.com" target="_blank"><TelegramIcon /></a>
                        <a href="instagram.com"><InstagramIcon /></a>
                        <a href="github.com"><GitHubIcon /></a>
                        <a href="facebook.com"><FacebookIcon /></a>
                        <a href="gmail.com"><EmailIcon /></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn;
