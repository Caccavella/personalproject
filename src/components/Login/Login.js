import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-container">
                    <div className="name">
                        <h1>Sim History</h1>
                    </div>
                    <a href={process.env.REACT_APP_LOGIN}><button className="loginbutton">Log In</button></a>
                </div>
                    {/* <div className="details">
                    </div> */}
                
            </div>
        )
    }

}