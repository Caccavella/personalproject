import React, { Component } from 'react';

import '../../App.css'
import Header from '../Header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScholasticCard from '../cards/education/scholasticcard';
import GmailCard from '../cards/emails/gmailcard';
import TMZCard from '../cards/entertainment/tmzcard';
import TwitchCard from '../cards/gaming/twitchcard';
import CNNCard from '../cards/news/cnncard';
import ESPNCard from '../cards/sports/espncard';
import TechCrunchCard from '../cards/technology/techcrunchcard';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';

 class URLS extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }
    render() {
        return (
            <div>
                {Header}
                <MuiThemeProvider>
                    <div className="cardlist">
                        <div className="cardsleft">
                            <div className="card">
                                <ESPNCard />
                            </div>
                            <br />
                            <div className="card">
                                <TechCrunchCard />
                            </div>
                            <br />
                            <div className="card">
                                <ScholasticCard />
                            </div>
                            <br />
                            <div className="card">
                                <GmailCard />
                            </div>
                        </div>
                        <div className="cardsright">
                            <br />
                            <div className="card">
                                <TMZCard />
                            </div>
                            <br />
                            <div className="card">
                                <TwitchCard />
                            </div>
                            <br />
                            <div className="card">
                                <CNNCard />
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
                <div className="button-container">
                    <button className="gobutton">Go!</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

        user: state.user
    }
}
let outputActions = {
    getUserInfo: getUserInfo
}

export default connect(mapStateToProps, outputActions)(URLS);