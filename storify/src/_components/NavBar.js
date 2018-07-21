import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

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
};

function ButtonAppBar(props) {
  const { classes } = props;
  
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Completed Stories</Button>
          <Button color="inherit">Ongoing Stories</Button>
          <Button color="inherit">Create +</Button>
          {<Typography variant="title" color="inherit" className={classes.flex}></Typography>}
          <Link to ="/Login"><Button color="inherit" >Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
 
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);