import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  background:{
    background:"#9191d4"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.background}>
          <Link to="/Home" textDecoration="none" ><Button color="inherit" >Home</Button></Link>

          <Link to='/Stories'>
            <Button color="inherit">Stories</Button>
          </Link>

          <Button color="inherit">Ongoing Stories</Button>
          <Link to="/CreateStory">
          <Button color="inherit">Create Your's</Button>
          </Link>
          {<Typography variant="title" color="inherit" className={classes.flex}></Typography>}
          <Link to="/Login" >
            <Button variant="fab">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>

  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);