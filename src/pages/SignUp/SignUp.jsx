import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';
// Image, Icon
import LoginImage from '../../assets/image/login-img.jpg';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
// Default style
import './SignUp.scss';


class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">

                <div className="right-container">

                <div className="description-right">
                    <h1>Registration!</h1>
                    <p>Create your own account for your own board</p>
                </div>

                <div className="login-form">
                    <form action="#">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter this you username" />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter this you email" />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="**********" />

                        <label htmlFor="">Re-Password</label>
                        <input type="password" placeholder="**********" />

                        <Button component={Link} to="/login" className="newAcount">
                            Do you have acount?
                        </Button>

                        <div className="button-submit">
                            <button type="submit">Sign up</button>
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

                <div className="left-container">
                    <img src={LoginImage} alt="login" />
                    <div className="description-left">
                        <h1>Board to do more at your work</h1>
                        <p>Get ready for your presence to make sense</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn;
