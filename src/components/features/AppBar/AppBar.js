// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, isLogged } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {isLogged ? (<NavLink to='/'>Recent Posts</NavLink>) : ''}
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {isLogged ? (<NavLink to='/post/add'>Add Posts</NavLink>) : ''}
          </Typography>
          <Button color="inherit"><a href='http://google.com'>{isLogged ? 'Sign Out' : 'Login'}</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool,
};

export default withStyles(styles)(ButtonAppBar);

//eslint-enable
