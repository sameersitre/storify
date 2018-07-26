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
  
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
 
};

function ButtonAppBar(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.background}>
          <Link to="/Home" textDecoration="none" ><Button style={{width:"150px" , height:"60px"}} variant="contained" color="primary" className={classes.button}>
        Home
      </Button></Link>

          <Link to='/Stories'>
          <Button style={{width:"150px" , height:"60px"}} variant="contained" color="primary" className={classes.button}>Stories</Button>
          </Link>
           
           <Link to="/OngoingStories">
           <Button style={{width:"150px" , height:"60px"}} variant="contained" color="primary" className={classes.button}>Ongoing Stories</Button>
          </Link>
          
          <Link to="/CreateStory">
          <Button style={{width:"150px" , height:"60px"}} variant="contained" color="primary" className={classes.button}>Create Your's</Button>
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