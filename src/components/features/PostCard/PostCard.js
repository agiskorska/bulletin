import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PostCard extends React.Component {
  state = { expanded: false };


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick() {
    console.log('edit post');
  }


  render() {
    const { classes } = this.props;
    const { avatar, imageUrl, imageTitle, price, date, phoneNumber, shortDescription, description, id } = this.props;
    const linkToEdit = '/post/' + id + '/edit';
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={avatar} alt='avatar'></img>
            </Avatar>
          }
          action={
            <IconButton  >
              <Link to={{
                pathname: linkToEdit,
                aboutProps: {
                  id: id,
                },
              }}><EditIcon /></Link>

            </IconButton>
          }
          title={shortDescription}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent>
          <Typography component="p">
            Price: ${price}
            <br/>
            Phone Number: {phoneNumber}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} >
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  imageUrl: PropTypes.any,
  imageTitle: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.any,
  date: PropTypes.string,
  phoneNumber: PropTypes.number,
  price: PropTypes.number,
};

export default withStyles(styles)(PostCard);
