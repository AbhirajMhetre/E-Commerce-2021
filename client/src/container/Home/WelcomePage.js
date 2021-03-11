import React from 'react';
import { Button } from '@material-ui/core';

import './WelcomePage.css';

const WelcomePage = (props) => {

    const handleSignIn = () => {
        props.history.push(`/users/login`)
    }

    const handleSignUp = () => {
        props.history.push(`/users`)
    }

    return(
        <>
        <div className="welcome-page">
            <div className="welcome-text">
                Welcome, Enjoy your Shopping !!!
            </div>
            
        </div>
        <div className="welcome-page-button">
            
            <Button 
                variant="contained" 
                color="secondary"
                onClick={handleSignIn}
            >
                Sign-In
            </Button>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={handleSignUp}
                style={{
                    marginLeft: '5%'
                }}
            >
                Sign-Up
            </Button>            
        </div>
        </>
    );
}

export default WelcomePage;