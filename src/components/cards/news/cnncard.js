import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import CNN from '../../../logos/cnn-logo.png';

const CNNCard = () => (
  <Card>
    <Checkbox className="checkbox" />
    <CardHeader
      title="CNN"
      subtitle="cnn.com"
      avatar={CNN}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.
    </CardText>
  </Card>
);

export default CNNCard;