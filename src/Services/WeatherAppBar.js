import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
 
const styles = {
  root: {
    flexGrow: 1
  },
  WeatherAppBar: {
    background: "#2196f3"
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};
 
const WeatherAppBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.WeatherAppBar}>
        <Toolbar variant="dense">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="title" color="inherit" align="center">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
 
WeatherAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(WeatherAppBar);