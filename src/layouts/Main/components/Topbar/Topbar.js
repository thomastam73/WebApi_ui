import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#8E7C68",
  },
  flexGrow: { flexGrow: 1 },
  signInButton: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "black",
    },
    flexGrow: 1,
  },
  hide: { color: "#8E7C68", flexGrow: 2 },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = () => {
    if (window.confirm("Confirm to Logout?")) {
      localStorage.removeItem("Token");
      window.location.href = "/";
    }
  };

  const setLoginStauts = () => {
    if (localStorage.getItem("Token")) {
      return (
        <IconButton
          className={classes.signOutButton}
          color="inherit"
          onClick={handleSignOut}
        >
          <InputIcon />
        </IconButton>
      );
    } else {
      return (
        <Button
          className={classes.signInButton}
          color="primary"
          variant="text"
          onClick={() => history.push("/home")}
        >
          Login
        </Button>
      );
    }
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Typography className={classes.hide}>asd</Typography>
        <RouterLink to="/" className={classes.link}>
          <Typography variant="h6" className={classes.title}>
            {window.siteSetting.siteName}
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        {setLoginStauts()}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
