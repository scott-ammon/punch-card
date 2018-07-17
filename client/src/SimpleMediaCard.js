import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  return (
    <div style={{width: '70%', margin: '10px auto'}}>
      <Card style={{"justify-content": "center"}} className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://www.placecage.com/c/200/300"
          title="Restaurant punch-card"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Insert Card here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            More...
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
