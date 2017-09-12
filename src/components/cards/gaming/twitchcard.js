import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TwitchTv from '../../../logos/twitchtv.png';

const TwitchCard = () => (
  <Card>
    <Checkbox className="checkbox" />
    <CardHeader
      title="TWITCHTV"
      subtitle="twitch.tv"
      avatar={TwitchTv}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    Twitch is the world's leading video platform and community for gamers. More than 45 million gamers gather every month on Twitch to broadcast, watch and chat ...
    </CardText>
  </Card>
);

export default TwitchCard;