import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  const url = "/card/" + props.cardId
  return (
    <div style={{width: '70%', margin: '10px auto'}}>
      <Card style={{"justify-content": "center"}} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.restaurant.img}
          title="Restaurant punch-card"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h4">
            {props.restaurant.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={url} size="small" color="primary">
            View Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
