import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Scholastic from '../../../logos/scholastic.jpg';

const ScholasticCard = () => (
  <Card>
    <Checkbox className="checkbox" />
    <CardHeader
      title="SCHOLASTIC"
      subtitle="scholastic.com"
      avatar={Scholastic}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    Scholastic Book Clubs is the best possible partner to help you get excellent books into the hands of every child, to help them become successful lifelong readers ...
    </CardText>
  </Card>
);

export default ScholasticCard;