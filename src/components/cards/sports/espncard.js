import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import ESPN from '../../../logos/espn.png';

const ESPNCard = () => (
  <Card>
    <Checkbox className="checkbox" />
    <CardHeader
      title="ESPN"
      subtitle="espn.com"
      avatar={ESPN}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.    </CardText>
  </Card>
);

export default ESPNCard;