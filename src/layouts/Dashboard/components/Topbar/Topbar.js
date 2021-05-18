import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();

  const handleSignOut = () => {
    if (window.confirm('Confirm to Logout?')) {
      localStorage.removeItem('Token');
      window.location.href = '/';
    }
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/" className={classes.link}>
          <Typography variant="h6" className={classes.title}>
            {window.siteSetting.siteName}
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <IconButton className={classes.signOutButton} color="inherit" onClick={handleSignOut}>
          <InputIcon />
        </IconButton>
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
